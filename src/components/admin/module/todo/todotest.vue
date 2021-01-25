<template>
  <div class="log-show">
    <!--        <msg></msg>-->
    <div class="date-picker">
<!--      <datePicker-->
<!--        class="calendar"-->
<!--        :options="calendarArr"-->
<!--        :logMarkArr = "logMarkArr"-->
<!--        @handleClickDay="handleClickDay"-->
<!--        @handlePrevMonth="handlePrevMonth"-->
<!--        @handleNextMonth="handleNextMonth"-->
<!--        @handleBackDay="handleBackDay"-->
<!--      ></datePicker>-->
      <calendar :startDate="new Date(1611504000000)"
                :endDate="new Date(1611590400000)"
                :clickHandle="handleClickDay"
                :options="{dataMin:0, dataMax:15000, inRangeColor:['#fff', '#EDEBF0', '#EEA69D', '#00C46B']}"
                :data="logMarkArr"
      ></calendar>
    </div>
    <div class="content-box">
      <div class="log-content" :class="{'log-content-open': !isEdit, 'log-content-close': isEdit}">
        <vue3-markdown-it class="markdown-css" :source="logText" />
      </div>
      <div class="edit-textarea" :class="{'edit-textarea-open': isEdit, 'edit-textarea-close': !isEdit}">
        <textarea v-show="isEdit" v-model="logText"></textarea>
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
  import {reactive, toRefs, computed, onMounted} from 'vue'
  import http from '/src/lib/http'
  import {dateForTimestamp, timestampForStartEnd} from '/src/lib/custom'
  import "/src/components/common/css/markdown.less"
  import 'highlight.js/styles/github-gist.css';
  import msg from '/src/components/common/Message.vue'

  export default {
    name: "index",
    components: {
      datePicker, msg, calendar
    },
    setup() {
      const state = reactive({
        // 日历选项
        calendarArr: {
          type: 'combination',
          headStyle: {
            todayBtn: 'right',
            combination: 'center',
            checkBtn: 'right',
          },
          viewStyle: {
            day: 'right'
          },
          afterClick: false,
          calendarData: []
        },
        // 编辑状态
        isEdit: false,
        // log内容
        logText: ''
      })
      const {calendarArr, isEdit, logText} = toRefs(state)


      // 获取数据
      const getLog = (timestampStart, timestampEnd) => {
        http('get', '/log/getLog', {
          timestampStart: timestampStart,
          timestampEnd: timestampEnd
        }).then(res => {
          state.logText = res.data.content
        })
      }

      // 加载今天笔记
      const handleBackDay = () => {
        // 今天的开始结束时间戳
        const todayTimestampStart = timestampForStartEnd(Number(new Date().getTime())).timestampStart
        const todayTimestampEnd = timestampForStartEnd(Number(new Date().getTime())).timestampEnd
        getLog(todayTimestampStart, todayTimestampEnd)
      }

      // 提交编辑
      const upData = () => {
        state.isEdit = !state.isEdit
        console.log(state.isEdit)
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

      // 获取有日记的日期
      // 日历，日期是否存在日记标记
      // 循环渲染 判断条件 到当年数组判断当月当日日记是否存在
      // 获取一整年的日记日期数组
      const logMarkArr = (year) => {
        let logMarkState = reactive({
          markArr: {}
        })
        http('get', '/log/logDateSort', {year}).then(res => {
          let data = res.data
          // 格式化
          for (let item of data) {
            let {m, d} = item
            !(m in logMarkState.markArr) && (logMarkState.markArr[m] = {})
            logMarkState.markArr[m][d] = true
          }
        })
        return logMarkState.markArr
      }


      onMounted(() => {
        handleBackDay()
      })

      return {
        calendarArr, isEdit,
        handleClickDay, handlePrevMonth, handleNextMonth,handleBackDay,
        upData, logText, logMarkArr
      }
    }
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
