<template>
  <button @click="handlePrevMonth">-</button>
  <button @click="handleNextMonth">+</button>
  <div id="summary" style="width: auto; height: 420px;"></div>
</template>

<script>
  import {reactive, toRefs, computed, onMounted, watchEffect, watch, inject} from 'vue'

  export default {
    name: "Calendar",
    props: {
      data: Array,
      options: {
        validator: value => {
          const defaultOptions = {
            dataMin: 0,
            dataMax: 10000,
            inRangeColor: ['#fff', '#000']
          }
          for (let item in defaultOptions) {
            value[item] = value[item] || defaultOptions[item]
          }
          // 该函数的return不起作用，只能操作value
          return value
        }
      },
      startDate: {
        type: Date,
        required: true,
        default: () => {
          const date = new Date()
          date.setMonth(0)
          date.setDate(1)
          return date
        }
      },
      endDate: {
        type: Date,
        required: true,
        default: () => {
          const date = new Date()
          date.setMonth(11)
          date.setDate(31)
          return date
        }
      },
      handleClick: Object,
    },
    setup(props) {
      console.log(props)
      const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

      const echarts = inject("ec")
      let myChart = ''
      const summaryChart = () => {
        myChart = echarts.init(document.getElementById("summary"))
        // 绘制图表
        myChart.setOption({
          backgroundColor: '#ddd',
          visualMap: {
            show: false,
            min: props.options.dataMin,
            max: props.options.dataMax,
            inRange: {
              color: props.options.inRangeColor
            }
          },
          calendar: {
            yearLabel: {
              position: 'left',
              margin: 60
            },
            monthLabel: {
              position: 'start',
              fontSize: 17,
              margin: 25
            },
            // left: 110,
            left: 'center',
            top: 70,
            cellSize: 40,
            range: [`${props.startDate.getFullYear()}-${props.startDate.getMonth()+1}`]
          },
          toolbox: {
            show: true,
            itemSize: 30,
            left: 'center',
            top: 17,
            itemGap: 70,
            feature: {
              myTool1: {
                show: true,
                title: '前一个月',
                icon: 'image://https://www.chongchongchong.club/static/img/icon/js_icon.svg',
                onclick: function (){
                  handlePrevMonth()
                }
              },
              myTool2: {
                show: true,
                title: '后一个月',
                icon: 'image://https://www.chongchongchong.club/static/img/icon/js_icon.svg',
                onclick: function (){
                  handleNextMonth()
                }
              },
            }
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: props.data,
            radius: ['100%', '100%']
          }
        });
        myChart.on('click', params => {
          props.handleClick(...params.data)
        });
        // window.onresize = function () {//自适应大小
        //   myChart.resize();
        // };
      }

      const state = reactive({
        startDate: props.startDate,
        endDate: props.endDate
      })

      const startDate = new Date(state.startDate.getFullYear(), state.startDate.getMonth(), state.startDate.getDate()),
        endDate = new Date(state.endDate.getFullYear(), state.endDate.getMonth(), state.endDate.getDate())
      const setDate = (around) => {
        around == '-'
          ? (startDate.setMonth(startDate.getMonth() - 1), endDate.setMonth(endDate.getMonth() - 1))
          : around == '+'
          ? (startDate.setMonth(startDate.getMonth() + 1), endDate.setMonth(endDate.getMonth() + 1))
          : new Error('arg Error')
        state.startDate = startDate
        state.endDate = endDate
      }

      const handlePrevMonth = () => {
        setDate('-')
        myChart.setOption({
          calendar: {
            range: [`${state.startDate.getFullYear()}-${state.startDate.getMonth() + 1}`]
          }
        });

      }
      const handleNextMonth = () => {
        setDate('+')
        myChart.setOption({
          calendar: {
            range: [`${state.startDate.getFullYear()}-${state.startDate.getMonth() + 1}`]
          }
          // series: {
          //   type: 'heatmap',
          //   coordinateSystem: 'calendar',
          //   // data: getVirtulData(2021),
          //   radius: ['100%','100%']
          // }
        });
      }
      onMounted(() => {
        summaryChart()
      })
      return {state, handlePrevMonth, handleNextMonth}
    }
  }
</script>

<style scoped>

</style>
