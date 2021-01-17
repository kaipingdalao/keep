<template>
  <div id="AdminIndex">
    <div class="tips">
      <ul>
        <li>
          <i>4</i>
          <span>4项Todo未完成</span>
        </li>
        <li>
          <i>0</i>
          <span>今日总结未编写</span>
        </li>
        <li style="background-color:#65CEA6;">
          <i>11</i>
          <span>当月上传笔记</span>
        </li>
      </ul>
    </div>
    <div class="charts">
      <div id="categoryChart" style="width: 900px; height: 400px;"></div>
      <div id="clickChart" style="width: 500px; height: 400px;"></div>
      <div id="summaryChart" style="width: 1200px; height: 250px;"></div>
    </div>
  </div>
</template>

<script>
  import {useRoute, useRouter} from 'vue-router'
  import {reactive, toRefs, computed, onMounted, watchEffect, watch, inject} from 'vue'
  import {useStore} from 'vuex'
  import http from '/src/lib/http'

  export default {
    setup() {
      const data = reactive({
        catCountData: [],
        catTitleArr: [],
        catDataArr: [],
        catClickCountArr: [],
        todoArr: []
      })
      const {catCountData} = toRefs(data)

      const echarts = inject("ec")

      const categoryChart = () => {
        let myChart = echarts.init(document.getElementById("categoryChart"));

        // 绘制图表
        myChart.setOption({
          title: {
            text: '文章分类统计'
          },
          tooltip: {},
          legend: {
            data: ['数量']
          },
          xAxis: {
            data: data.catTitleArr
          },
          yAxis: {},
          series: [{
            name: '分类数量',
            type: 'bar',
            data: data.catDataArr
          }]
        });
        window.onresize = function () {//自适应大小
          myChart.resize();
        };
      }

      const clickChart = () => {
        let myChart = echarts.init(document.getElementById("clickChart"));
        // 绘制图表
        myChart.setOption({
          title: {
            text: '分类点击统计',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: data.catTitleArr
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series:
            {
              name: '点击次数',
              type: 'pie',
              radius: [30, 110],
              center: ['50%', '50%'],
              roseType: 'area',
              data: data.catClickCountArr
            }
        });
        window.onresize = function () {//自适应大小
          myChart.resize();
        };
      }

      const summaryChart = () => {
        const currentYear = new Date().getFullYear()
        const getVirtulData = year => {
          year = year || currentYear;
          var date = +echarts.number.parseDate(year + '-01-01');
          var end = +echarts.number.parseDate(year + '-12-31');
          var dayTime = 3600 * 24 * 1000;
          var dateData = [];
          for (var time = date; time <= end; time += dayTime) {
            dateData.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              // Math.floor(Math.random() * 10000)
              Math.floor(0)
            ]);
          }
          for (let item of data.todoArr) {
            const day = getDays(item.date * 1000)
            dateData[day-1][1] = item.done_state == 1 ? 10000 : 5000
          }
          return dateData;
        }

        let myChart = echarts.init(document.getElementById("summaryChart"));
        // 绘制图表
        myChart.setOption({
          visualMap: {
            show: false,
            min: 0,
            max: 10000,
            inRange: {
              color: ['#EBEDF0', '#FB8675', '#00C46C']
            }
          },
          calendar: {
            range: currentYear
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData(currentYear),
            itemStyle: {
              borderColor: '#fff'
            }
          }
        });
        window.onresize = function () {//自适应大小
          myChart.resize();
        };
      }
      function getDays(date){
        // 构造du1月1日
        var lastDay = new Date(date);
        lastDay.setMonth(0);
        lastDay.setDate(1);

        // 获取zhi距离dao1月1日过去多少zhuan天
        var days = (date - lastDay) / (1000 * 60 * 60 *24) + 1;
        return days;
      }
      onMounted(() => {//需要获取到element,所以是onMounted的Hook
        http('get', '/article/catCount').then(res => {
          data.catCountData = res.data
          for (let item of data.catCountData) {
            data.catTitleArr.push(item.title)
            data.catDataArr.push(item.count)
            data.catClickCountArr.push({value: item.click_count, name: item.title})
          }
          categoryChart()
          clickChart()
        })
        http('get', '/todo/todoDateSort', {year: new Date().getFullYear()}).then(res => {
          data.todoArr = res.data
          summaryChart()
        })

      });


      return {}
    }
  }
</script>

<style scoped lang="less">
  #AdminIndex {
    overflow-y: auto;

    .tips {
      width: 100%;
      box-sizing: border-box;
      -moz-box-sizing: border-box; /* Firefox */
      -webkit-box-sizing: border-box; /* Safari */
      /*border: 1px #E9E7EA solid;*/
      border: 1px #ddd solid;
      padding: 13px 15px;

      ul {
        display: block;

        li {
          display: inline-block;
          width: 270px;
          height: 130px;
          background-color: #FB8675;
          margin: 0px 10px 0px 0px;
          color: #fff;

          i {
            box-sizing: border-box;
            display: block;
            padding: 15px 0px 10px 15px;
            font-size: 70px;
          }

          span {
            box-sizing: border-box;
            display: block;
            padding: 5px 0px 10px 15px;
            font-size: 15px;
          }
        }
      }
    }

    .charts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

  }
</style>
