<template>
  <div id="AdminIndex">
    <div id="customerChart" style="width: 500px; height: 500px;"></div>
    <div class="tips">
      <ul>
        <li>
          <i>4</i>
          <span>4项Todo未完成</span>
        </li>
        <li>
          <i>4</i>
          <span>4项Todo未完成</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {useRoute, useRouter} from 'vue-router'
  import {reactive, toRefs, computed, onMounted, watchEffect, watch, inject} from 'vue'
  import {useStore} from 'vuex'

  export default {
    setup() {

      let echarts = inject("ec");//引入
      console.log(echarts)
      onMounted(() => {//需要获取到element,所以是onMounted的Hook
        let myChart = echarts.init(document.getElementById("customerChart"));
        // 绘制图表
        myChart.setOption({
          title: {text: "总用户量"},
          tooltip: {},
          xAxis: {
            data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
          },
          yAxis: {},
          series: [
            {
              name: "用户量",
              type: "line",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        });
        window.onresize = function () {//自适应大小
          myChart.resize();
        };
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
      border: 1px #E9E7EA solid;
      padding: 10px 15px;

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

  }
</style>
