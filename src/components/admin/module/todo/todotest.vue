<template>
  <div class="log-show">
    <div class="date-picker">
      <calendar :startDate="dateState.monthFirstDay"
                :endDate="dateState.monthEndDay"
                :options="{dataMin:0, dataMax:15000, inRangeColor:['#fff', '#EDEBF0', '#EEA69D', '#00C46B']}"
      ></calendar>
    </div>
    <div class="content-box">
      <div class="log-content" :class="{'log-content-open': !isEdit, 'log-content-close': isEdit}">
        <vue3-markdown-it class="markdown-css" :source="log.logData.content" />
      </div>
      <div class="edit-textarea" :class="{'edit-textarea-open': isEdit, 'edit-textarea-close': !isEdit}">
        <textarea v-show="isEdit" v-model="log.logData.content"></textarea>
      </div>
      <div class="edit-switch">
        <button @click="upData">{{isEdit ? 'submit' : 'edit'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import datePicker from '/src/components/common/vue3-date-picker/date-picker.vue'
  import calendar from '/src/components/common/Calendar.vue'
  import {reactive, toRefs, computed, onMounted, watch, watchEffect} from 'vue'
  import http from '/src/lib/http'
  import {dateForTimestamp, timestampForStartEnd} from '/src/lib/custom'
  import "/src/components/common/css/markdown.less"
  import 'highlight.js/styles/github-gist.css';
  import msg from '/src/components/common/Message.vue'

  const dateState = reactive({
    date: new Date(),
    year: computed(() => dateState.date.getFullYear()),
    month: computed(() => dateState.date.getMonth()),
    day: computed(() => dateState.date.getDate()),
    monthFirstDay: computed(() => new Date(dateState.year, dateState.month, 1)),
    monthEndDay: computed(() => new Date(dateState.year, dateState.month + 1, 0))
  })

  const log = reactive({
    logData: {
      id: null,
      content: '',
      date: null
    },
    logSort: [],
    edit: () => {
      http('post', '/log/edit', {
        content: log.logData.content,
        date: log.logData.date
      }).then(res => {
        console.log(res)
      })
    }
  })


  export default {
    name: "index",
    components: {
      datePicker, msg, calendar
    },
    setup() {
      const state = reactive({
        // 编辑状态
        isEdit: false,
        // log内容
        logText: ''
      })
      const {isEdit, logText} = toRefs(state)



      // 加载今天笔记
      const handleBackDay = () => {
        // 今天的开始结束时间戳
        const todayTimestampStart = timestampForStartEnd(Number(new Date().getTime())).timestampStart
        const todayTimestampEnd = timestampForStartEnd(Number(new Date().getTime())).timestampEnd
        getLog(todayTimestampStart, todayTimestampEnd).then(res => {
          console.log(res)
          if (!res.data.id) log.logData.id = res.data.id
          log.logData.content = res.data.content
        })
      }

      // 提交编辑
      const upData = () => {
        state.isEdit = !state.isEdit
        const date = new Date().getTime()
        // http('post', '/log/editLog', {content:state.logText,date})
        // .then(res => {
        //   console.log(res)
        // })
      }

      // 点击日期
      const handleClickDay = (date) => {
        const {year, month, day} = date
        const timestampStart = dateForTimestamp(year, month, day)
        const timestampEnd = dateForTimestamp(year, month, day + 1) - 1
        getLog(timestampStart, timestampEnd)
      }
      // 点击上月
      const handlePrevMonth = () => {
      }
      // 点击下月
      const handleNextMonth = () => {
      }

      onMounted(() => {
        handleBackDay()
      })

      return {
        isEdit,
        handleClickDay, handlePrevMonth, handleNextMonth,handleBackDay,
        upData, logText,

        dateState, log
      }
    }
  }

  // 生成日历数据
  const setCalendarData = (year, startStamp, endStamp) => {
    todoDateSort(year).then(res => {
      const dayTime = 3600 * 24 * 1000,
        data = reactive({
          dateData: []
        }),
        dateHandle = new Date(),
        nowDate = new Date()
      for (let time = startStamp; time <= endStamp; time += dayTime) {
        dateHandle.setTime(time)
        // 需要 yyyy-MM-dd 格式时间
        let date = formatDate(dateHandle)
        let value = res.data[date] !== undefined ? (res.data[date] == 1 ? 15000 : 8000) : 5000
        if (dateHandle.getTime() > nowDate.getTime()) value = 0
        data.dateData.push([date, value]);
      }
      console.log(data.dateData)
      todos.dateSort = data.dateData
    })
  }

  // 获取数据
  const getLog = async (timestampStart, timestampEnd) => {
    return await http('get', '/log/getLog', {
      timestampStart: timestampStart,
      timestampEnd: timestampEnd
    })
  }
</script>

<style scoped lang="less">
  @edit-textarea-height: 350px;
  @edit-switch-height: 60px;

  .log-show {
    /*background-color: red;*/
    overflow-y: scroll;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: flex-start;
  }

  .date-picker {
    width: 40%;
    overflow-y: scroll;
  }

  .date-picker::-webkit-scrollbar {
    display: none;
  }

  .content-box {
    width: 60%;

    .edit-textarea {
      transition: all 250ms linear 0s;

      textarea {
        paddding: 15px;
        margin: 0px;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        border-radius: 8px;
        border: 1px #cccccc solid;

        font-size: 13px;
        box-sizing:border-box;
        padding: 15px;
      }
    }

    .edit-textarea-open {
      height: calc(@edit-textarea-height - @edit-switch-height);
    }

    .edit-textarea-close {
      height: 0px;
    }

    .log-content {
      width: 100%;
      /*background-color: green;*/
      overflow-y: scroll;
      transition: all 250ms linear 0s;
    }

    .log-content-open {
      margin-bottom: 0px;
      height: calc(100% - 60px);
    }

    .log-content-close {
      margin-bottom: 20px;
      height: calc(100% - @edit-textarea-height - 20px);
    }

    .edit-switch {
      position: absolute;
      bottom: 0px;
      right: 0px;
      height: @edit-switch-height;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      /*background-color: red;*/

      button {
        height: 30px;
        margin: 0px 60px;
        padding: 0px 10px;

        text-align: center;
        border: 1px solid #2061FF;
        border-radius: 4px;
        font-size: 14px;
        color: #2061FF;
        cursor: pointer;
      }
    }
  }

  /*.content-box::-webkit-scrollbar {*/
  /*    width: 16px; !*滚动条宽度*!*/
  /*    !*height: 16px;  !*滚动条高度*!*!*/
  /*}*/
</style>
