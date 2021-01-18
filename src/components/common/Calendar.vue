<template>
  <button @click="handlePrevMonth">-</button>
  <button @click="handleNextMonth">+</button>
  <div id="summary" style="width: 1200px; height: 500px;"></div>
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
        const currentYear = new Date().getFullYear()
        const getVirtulData = year => {
          year = year || currentYear;
          console.log(props.startDate || new Date())
          var date = +echarts.number.parseDate(formatDate(props.startDate));
          var end = +echarts.number.parseDate(formatDate(props.endDate));
          var dayTime = 3600 * 24 * 1000;
          var dateData = [];
          for (var time = date; time <= end; time += dayTime) {
            dateData.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return dateData;
        }

        myChart = echarts.init(document.getElementById("summary"));
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
              position: 'top',
              margin: 30
            },
            top: 100,
            cellSize: 40,
            // range: [formatDate(props.startDate), formatDate(props.endDate)]
            range: [`${props.startDate.getFullYear()}-${props.startDate.getMonth()+1}`]
            // range: [`2021-1`]
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData(props.startDate.getFullYear()),
            radius: ['100%','100%']
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
      const {startDate,endDate} = toRefs(state)

      const setDate = (around) => {
        const year = state.startDate.getFullYear(),
          month = state.startDate.getMonth(),
          day = state.startDate.getDate()
        console.log(year, month, day)

        const date = new Date()
        date.setFullYear(year)
        date.setMonth(around == '-' ? month : month + 1)
        date.setDate(day)
        console.log(date.getFullYear(), date.getMonth(), date.getDate())
        state.startDate = date
      }
      // const test = {
      //   year: state.startDate.getFullYear(),
      //   month: state.startDate.getMonth(),
      //   day: state.startDate.getDate(),
      //   prev: function() {
      //     console.log(111)
      //     console.log(this.month)
      //     const date = new Date()
      //     date.setFullYear(this.year)
      //     date.setMonth(this.month-1)
      //     date.setDate(this.day)
      //   },
      //   next: () => {
      //     const date = new Date()
      //     date.setFullYear(year)
      //     date.setMonth(month+1)
      //     date.setDate(day)
      //   }
      // }

      const handlePrevMonth = () => {
        setDate('-')
        myChart.setOption( {
          calendar: {
            yearLabel: {
              position: 'top',
              margin: 30
            },
            top: 100,
            cellSize: 40,
            range: [`${state.startDate.getFullYear()}-${state.startDate.getMonth()}`]
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            // data: getVirtulData(2021),
            radius: ['100%','100%']
          }
        });

      }
      const handleNextMonth = () => {
        setDate('+')
        myChart.setOption( {
          calendar: {
            yearLabel: {
              position: 'top',
              margin: 30
            },
            top: 100,
            cellSize: 40,
            range: [`${state.startDate.getFullYear()}-${state.startDate.getMonth()}`]
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            // data: getVirtulData(2021),
            radius: ['100%','100%']
          }
        });
      }
      onMounted(() => {
        summaryChart()
      })
      return {state,handlePrevMonth,handleNextMonth,startDate}
    }
  }
</script>

<style scoped>

</style>
