<template>
  <div class="cc-calendar">
    <calendarHeader
      :headOptions="headOptions"
      @handlePrevMonth='handlePrevMonth'
      @handleNextMonth='handleNextMonth'
      @handleToday='handleToday'
    />
    <ul class="calendar-week clear">
      <li v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{item}}</li>
    </ul>
    <ul class="calendar-view clear">
      <li v-for="(item, index) in visibleCalendarList"
          :key="index"
          class="date-view"
          :class="[
                    {'month-class': !isCurrentMonth(item.date)},
                    {todayBg: isCurrentDay(item.date)},
                    {handleDay: item.clickDay},
                    {'hasLog': (logMark[item.month] !== undefined && logMark[item.month] !== null) && (logMark[item.month][item.day] !== undefined && logMark[item.month][item.day] !== null)}
                ]"
          @click="handleClickDay(item,index)"
          :style="`pointer-events: ${!afterClick && todayLastTime < item.date.getTime()  ? 'none' : 'auto'}`"
      >
                <span class="date-day"
                      :style="dayStyle"
                      :class="[{'opacity-class': !isCurrentMonth(item.date)}]"
                >
                    {{item.day}}
                </span>
        <span class="calendar-num">
                    {{item.calendarNum}}
                </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import './assets/css/reset.min.css'
  import calendarHeader from './canlendar-head.vue';
  import * as utils from './assets/js/utils.js';
  import {reactive, toRefs, computed, watchEffect, onMounted} from 'vue'

  export default {
    name: 'cc-calendar',
    componentName: 'cc-calendar',
    props: {
      options: Object,
      logMarkArr: Object
    },
    components: {
      calendarHeader
    },

    // TODO 耦合度太高，待重构
    setup(props, {emit}) {
      // computed
      const dayStyle = computed(() => {
        return {
          textAlign: props.options.viewStyle.day,
        }
      })
      const visibleCalendar = computed(() => {
        const calendatState = reactive({
          calendatArr: []
        })
        const {calendatArr} = toRefs(calendatState)
        let {year, month, day} = utils.getNewDate(utils.getDate(state.time.year, state.time.month, 1));

        let currentFirstDay = utils.getDate(year, month, 1);

        // 获取当前月第一天星期几
        let weekDay = currentFirstDay.getDay();
        let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;

        // let monthDayNum = weekDay == 5 || weekDay == 6 ? 42 : 35
        let monthDayNum = weekDay == 6 ? 42 : 35
        for (let i = 0; i < monthDayNum; i++) {
          calendatState.calendatArr.push({
            date: new Date(startTime + i * 24 * 60 * 60 * 1000),
            year: year,
            month: month + 1,
            day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
            clickDay: false,
          })
        }

        state.headOptions.date = `${utils.englishMonth(month)} ${year}`;
        return calendatState.calendatArr
      })

      // 相应式对象
      let {year, month, day} = utils.getNewDate(new Date());
      const state = reactive({
        headOptions: {
          type: props.options.type,
          style: props.options.headStyle,
          date: '',
        },
        calendarTitleArr: [
          'MON',
          'TUE',
          'WED',
          'THU',
          'FRI',
          'SAT',
          'SUN '
        ],
        time: {year, month, day},
        calendarList: [],
        visibleCalendarList: visibleCalendar,
        logMark: {}
      })
      const {headOptions, calendarTitleArr, time, calendarList, visibleCalendarList, logMark} = toRefs(state)

      // 当前日期后的日期是否可点击
      const afterClick = props.options.hasOwnProperty('afterClick') ? props.options.afterClick : true


      // methods
      // 是否是当前月
      const isCurrentMonth = (date) => {
        let {year: currentYear, month: currentMonth} = utils.getNewDate(utils.getDate(state.time.year, state.time.month, 1));
        let {year, month} = utils.getNewDate(date);
        return currentYear == year && currentMonth == month
      }
      // 是否是今天
      const isCurrentDay = (date) => {
        let {year: currentYear, month: currentMonth, day: currentDay} = utils.getNewDate(new Date());
        let {year, month, day} = utils.getNewDate(date);
        return currentYear == year && currentMonth == month && currentDay == day;
      }
      // 上一个月
      const handlePrevMonth = () => {
        let prevMonth = utils.getDate(state.time.year, state.time.month, 1);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        state.time = utils.getNewDate(prevMonth);
        state.headOptions.date = `${utils.englishMonth(state.time.month)} ${state.time.year}`;
        emit('handlePrevMonth')
      }
      // 下一个月
      const handleNextMonth = () => {
        let nextMonth = utils.getDate(state.time.year, state.time.month, 1);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        state.time = utils.getNewDate(nextMonth);
        state.headOptions.date = `${utils.englishMonth(state.time.month)} ${state.time.year}`;
        emit('handleNextMonth')
      }
      // 点击回到今天
      const handleToday = () => {
        state.time = utils.getNewDate(new Date());
        emit('handleBackDay')
      }
      // 点击某一天
      const handleClickDay = (item, index) => {
        // TODO
        state.calendarList.map(x => {
          x.clickDay = false;
        });
        state.visibleCalendarList[index].clickDay = !state.visibleCalendarList[index].clickDay
        emit('handleClickDay', item)
      }

      // 判断是否超过当前日期，返回bool
      const todayDate = new Date()
      const todayLastTime = new Date(
        todayDate.getFullYear(),
        todayDate.getMonth(),
        Number(todayDate.getDate()) + 1).getTime() - 1

      // created
      onMounted(() => {
        state.calendarList = visibleCalendar;
        if (props.logMarkArr !== undefined && props.logMarkArr !== null) {
          // 获得当年年份日记日期数组
          state.logMark = props.logMarkArr(
            Number(new Date().getFullYear())
          )
          // 当年份发生变化时才会重新访问接口
          let mark = new Date().getFullYear()
          watchEffect(() => {
            if (state.time.year !== mark) {
              state.time.year > mark ? mark++ : mark--
              state.logMark = props.logMarkArr(state.time.year)
            }
            // state.time.year !== mark && (state.time.year > mark ? mark++ : mark--) , (state.logMark = props.logMarkArr(state.time.year))
          })
        }
      })

      return {
        headOptions,
        calendarTitleArr,
        time,
        calendarList,
        dayStyle,
        visibleCalendar,
        isCurrentMonth,
        isCurrentDay,
        handlePrevMonth,
        handleNextMonth,
        handleToday,
        handleClickDay,
        todayLastTime,
        visibleCalendarList,
        logMark,
        afterClick
      }
    }
  }
</script>

<style lang="less">
  .cc-calendar {
    /*padding: 23px 30px 30px;*/
    padding: 20px 30px 30px;
    width: 100%;
    height: 100%;
    background: #F9FAFC;
    box-sizing: border-box;
    overflow-y: auto;

    .calendar-week {
      width: 100%;
      height: 46px;
      line-height: 46px;
      border: 1px solid #E4E7EA;
      border-right: none;

      .week-item {
        float: left;
        width: 14.285%;
        text-align: center;
        font-size: 14px;
        color: #424953;
        border-right: 1px solid #E4E7EA;
        font-weight: 600;
      }
    }

    .calendar-view {
      width: 100%;
      border-left: 1px solid #E4E7EA;

      .date-view {
        float: left;
        width: 14.285%;
        height: 120px;
        border-right: 1px solid #E4E7EA;
        border-bottom: 1px solid #E4E7EA;
        cursor: pointer;

        .date-day {
          padding: 8px 8px 0;
          display: block;
          width: 100%;
          font-size: 14px;
          color: #7F8794;
        }

        .calendar-num {
          margin-top: 6px;
          display: block;
          width: 100%;
          text-align: center;
          font-size: 30px;
          color: #424953;
        }
      }

      .opacity-class {
        opacity: .5;
      }

      .month-class {
        background-image: linear-gradient(45deg, rgba(000, 000, 000, .03) 25%, transparent 25%, transparent 50%, rgba(000, 000, 000, .03) 50%, rgba(000, 000, 000, .03) 75%, transparent 75%, transparent);
        background-size: 20px 20px;
      }

      .todayBg {
        background: #FFFDEF;
      }

      .hasLog {
        background-color: #ebffea;
      }

      .handleDay {
        background: #2061FF !important;

        .date-day {
          color: #BCCFFF !important;
        }

        .calendar-num {
          color: #fff !important;
        }
      }
    }
  }
</style>
