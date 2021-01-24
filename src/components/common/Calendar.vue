<template>
  <div id="summary" style="width: auto; height: 100%;"></div>
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
            // 网格大小
            cellSize: 55,
            // 颜色区间
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
      clickHandle: Function,
      monthHandle: Function
    },
    setup(props) {
      const echarts = inject("ec")
      let myChart = ''
      const summaryChart = () => {
        myChart = echarts.init(document.getElementById("summary"))
        // 绘制图表
        myChart.setOption({
          // backgroundColor: 'red',
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
            left: 'center',
            top: 70,
            cellSize: props.options.cellSize,
            itemStyle: {
              color: '#EDEBF0',
              borderWidth: 1,
              borderColor: '#fff'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#999',
                width: 1,
                type: 'solid'
              }
            },
            range: [`${props.startDate.getFullYear()}-${props.startDate.getMonth() + 1}`]
          },
          toolbox: {
            show: true,
            itemSize: 15,
            left: 'center',
            top: 23,
            itemGap: 70,
            // 自定义功能按钮
            feature: {
              myTool1: {
                show: true,
                title: '前一个月',
                icon: "M705 923c-6.4 0-12.8-2.4-17.7-7.3l-386-386c-9.8-9.8-9.8-25.6 0-35.4l386-386c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L354.4 512l368.3 368.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.9-11.3 7.3-17.7 7.3z",
                onclick: function () {
                  setDate.prevMonth()
                }
              },
              myTool2: {
                show: true,
                title: '后一个月',
                icon: "M319 923c-6.4 0-12.8-2.4-17.7-7.3-9.8-9.8-9.8-25.6 0-35.4L669.6 512 301.3 143.7c-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0l386 386c9.8 9.8 9.8 25.6 0 35.4l-386 386c-4.9 4.9-11.3 7.3-17.7 7.3z",
                onclick: function () {
                  setDate.nextMonth()
                }
              },
            }
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: props.data,
            radius: ['100%', '100%'],
            label: {
              show: true,
              formatter: function (params) {
                var d = echarts.number.parseDate(params.value[0]);
                // return d.getDate() + '\n\n' + params.value[2] + '\n\n';
                return d.getDate()
              },
              color: '#000'
            },
          },
          // 过渡动画时间
          animationDuration: 300,
          animationEasing: "cubicInOut",
        });
        myChart.on('click', params => {
          props.clickHandle(...params.data)
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
      const setDate = {
        setOptions: () => {
          myChart.setOption({
            calendar: {
              range: [`${state.startDate.getFullYear()}-${state.startDate.getMonth() + 1}`]
            }
          })
        },
        prevMonth: () => {
          startDate.setMonth(startDate.getMonth() - 1)
          endDate.setMonth(endDate.getMonth() - 1)
          state.startDate = startDate
          state.endDate = endDate
          setDate.setOptions()
          props.monthHandle(startDate)
        },
        nextMonth: () => {
          startDate.setMonth(startDate.getMonth() + 1)
          endDate.setMonth(endDate.getMonth() + 1)
          state.startDate = startDate
          state.endDate = endDate
          setDate.setOptions()
          props.monthHandle(startDate)
        }
      }

      onMounted(() => {
        summaryChart()

        watchEffect(() => {
          myChart.setOption({
            series: {
              data: props.data
            }
          })
        })
      })

      return {state}
    }
  }
</script>

<style scoped>

</style>
