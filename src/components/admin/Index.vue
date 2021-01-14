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
      <div id="categoryChart" style="width: 500px; height: 400px;"></div>
      <div id="clickChart" style="width: 500px; height: 400px;"></div>
      <div id="summaryChart" style="width: 1200px; height: 500px;"></div>
    </div>
  </div>
</template>

<script>
  import {useRoute, useRouter} from 'vue-router'
  import {reactive, toRefs, computed, onMounted, watchEffect, watch, inject} from 'vue'
  import {useStore} from 'vuex'

  export default {
    setup() {
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
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
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
            text: '南丁格尔玫瑰图',
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
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
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
              name: '面积模式',
              type: 'pie',
              radius: [30, 110],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
              ]
            }
        });
        window.onresize = function () {//自适应大小
          myChart.resize();
        };
      }

      const summaryChart = () => {
        function getVirtulData(year) {
          year = year || '2017';
          var date = +echarts.number.parseDate(year + '-01-01');
          var end = +echarts.number.parseDate(year + '-12-31');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time <= end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
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
        categoryChart()
        clickChart()
        summaryChart()
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
