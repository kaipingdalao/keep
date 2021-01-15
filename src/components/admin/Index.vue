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
      <div id="summaryChart" style="width: 1200px; height: 500px;"></div>
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
        catClickCountArr: []
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
        function getVirtulData(year) {
          year = year || '2021';
          var date = +echarts.number.parseDate(year + '-01-01');
          var end = +echarts.number.parseDate(year + '-12-31');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time <= end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              // Math.floor(Math.random() * 10000)
              Math.floor(10 * 10000)
            ]);
          }
          return data;
        }

        let myChart = echarts.init(document.getElementById("summaryChart"));
        // 绘制图表
        myChart.setOption({
          visualMap: {
            show: false,
            min: 0,
            max: 10000
          },
          calendar: {
            range: '2017'
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData(2017)
          }
        });
        window.onresize = function () {//自适应大小
          myChart.resize();
        };
      }
      onMounted(() => {//需要获取到element,所以是onMounted的Hook
        http('get', '/article/catCount', ).then(res => {
          data.catCountData = res.data
          console.log(res)
          for (let item of data.catCountData) {
            data.catTitleArr.push(item.title)
            data.catDataArr.push(item.count)
            data.catClickCountArr.push({value: item.click_count, name: item.title})
          }
          categoryChart()
          clickChart()
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
