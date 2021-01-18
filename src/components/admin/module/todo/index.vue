<template>
  <div id="Log">
    <div class="date-picker">
<!--      <datePicker :options="calendarArr" :logMarkArr = "logMarkArr" @handleClickDay="selectDate"></datePicker>-->
<!--      <div id="summaryChart" style="width: 1200px; height: 250px;"></div>-->
      <rili :startDate="start" :endDate="end" :handle-click="handle" :options="{dataMin:90, dataMax:10000, inRangeColor:['red', 'yellow']}"></rili>
    </div>
    <div class="todo-box">
      <div class="add-todo">
        <select @change="selectTodoType">
          <option value="once">once</option>
          <option value="everyday">everyday</option>
        </select>
        <input placeholder="add Todo" v-model="addTodoTitle" @keyup.enter="addToto(addTodoTitle)"/>
        <button @click="addToto(addTodoTitle)">+</button>
      </div>
      <div class="todo-handle" v-show="sumUndone == 0 ? false : true">
        <i>{{sumUndone}} item undone</i>
        <button @click="todayAllDone">all Done</button>
      </div>
      <ul class="add-list">
        <li class="no-todo" v-show="todoList.length == 0 ? true : false">
          <i>今天还没有代办事项哟</i>
        </li>
        <li v-for="(item,index) in todoList">
          <input type="checkbox"
                 :checked="item.done_state == 0 ? false : true"
                 @click="changeTodoState(item.id, index)"/>
          <label>{{item.title}}</label>
          <button @click="delTodo(item, index)"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import datePicker from '/src/components/common/vue3-date-picker/date-picker.vue'
  import rili from '/src/components/common/Calendar.vue'
  import {reactive, toRefs, computed, onMounted, watchEffect, watch, inject} from 'vue'
  import http from '/src/lib/http'

  export default {
    components: {
      datePicker,rili
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
          afterClick: true,
          calendarData: []
        },
        todoList: [],
        addTodoTitle: '',
        time: new Date(),
        sumUndone: 0,
        todoType: 'once'
      })
      let {calendarArr, todoList, addTodoTitle, sumUndone, todoType, time} = toRefs(state)

      // 时间转换年月日
      const dateFormat = date => {
        const year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate()
        return {year, month, day}
      }

      // 获取todo列表
      const getTodoList = () => {
        http('get', '/todo/getTodoList', {...dateFormat(state.time)}).then(res => {
          for (let i of res.data) {
            i.done_state = i.done_state == 1 ? true : false
          }
          console.log(res)
          state.todoList = res.data
          countUndone()
          summaryChart()
        })
      }
      // 更改状态
      const changeTodoState = (id, index) => {
        http('get', '/todo/setTodoState', {id}).then(res => {
          if (res.code == 200) {
            console.log('成功')
            state.todoList[index].done_state = !state.todoList[index].done_state
            countUndone()
          } else {
            console.log('失败')
          }
        })
      }

      // 当日已完成
      const todayAllDone = () => {
        http('get', '/todo/todoAllDone', {...dateFormat(state.time)}).then(res => {
          if (res.code == 200) {
            console.log('成功')
            for (let item of state.todoList) {
              item.done_state = true
            }
          } else {
            console.log('失败')
          }
        })
      }

      // 选择待办类型
      const selectTodoType = (e) => {
        state.todoType = e.target.value
      }

      // 添加todo
      const addToto = () => {
        const title = state.addTodoTitle
        http('get', '/todo/addTodo', {title, ...dateFormat(state.time), todoType: state.todoType}).then(res => {
          if (res.code == 200) {
            console.log(res)
            state.todoList.unshift({
              id: res.data.newTodoId,
              title: title,
              date: parseInt(new Date().getTime() / 1000),
              done_state: false
            })
            state.addTodoTitle = ''
            console.log('成功')
            countUndone()
          } else {
            console.log('失败')
          }
        })
      }

      // 删除
      const delTodo = (item, index) => {
        const data = {
          id: item.id,
          everydayId: item.everydayId
        }
        http('get', '/todo/delTodo', {...data}).then(res => {
          if (res.code == 200) {
            console.log('成功')
            state.todoList.splice(index, 1)
            countUndone()
          } else {
            console.log('失败')
          }
        })
      }

      // 选择日期
      const selectDate = date => {
        state.time.setFullYear(date.year, date.month - 1, date.day)
        getTodoList()
      }

      // 统计未完成
      const countUndone = () => {
        let sum = 0
        for (let item of state.todoList) {
          !item.done_state && sum++
        }
        state.sumUndone = sum
      }

      const logMarkArr = (year) => {
        let logMarkState = reactive({
          markArr: {}
        })
        http('get', '/todo/todoDateSort', {year}).then(res => {
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

      const echarts = inject("ec")
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
          console.log(state.todoList)
          for (let item of state.todoList) {
            const day = getDays(item.date * 1000)
            dateData[day-1][1] = item.done_state == 1 ? 10000 : 5000
          }
          return dateData;
        }

        // let myChart = echarts.init(document.getElementById("summaryChart"));
        // // 绘制图表
        // myChart.setOption({
        //   visualMap: {
        //     show: false,
        //     min: 0,
        //     max: 10000,
        //     inRange: {
        //       color: ['#EBEDF0', '#FB8675', '#00C46C']
        //     }
        //   },
        //   calendar: {
        //     range: ['2021-01-1', '2021-04-30']
        //   },
        //   series: {
        //     type: 'heatmap',
        //     coordinateSystem: 'calendar',
        //     data: getVirtulData(2021)
        //   }
        // });
        // myChart.on('click', function (params) {
        //   console.log(params);
        // });
        // window.onresize = function () {//自适应大小
        //   myChart.resize();
        // };
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

      const start = new Date(1609513209000)
      const end = new Date(1612105209000)
      const handle = (date, data) => {
        console.log(date, data)
      }

      onMounted(() => {
        getTodoList()
        // summaryChart()
        // http('get', '/todo/todoDateSort', {year: new Date().getFullYear()}).then(res => {
        //   state.todoList = res.data
        //   summaryChart()
        // })
      })

      return {
        calendarArr,
        todoList,
        addTodoTitle,
        sumUndone,
        selectDate,
        addToto,
        delTodo,
        changeTodoState,
        todayAllDone,
        selectTodoType,
        logMarkArr,

        start, end, handle
      }
    }
  }
</script>

<style scoped lang="less">
  #Log {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: flex-start;

    .date-picker {
      width: 40%;
      overflow-y: scroll;
    }

    .date-picker::-webkit-scrollbar {
      display: none;
    }

    .todo-box {
      width: 60%;
      height: 100%;
      overflow: auto;

      .add-todo {
        width: 600px;
        margin: 30px auto 20px auto;
        text-align: center;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #fff;
        border-radius: 17px;

        select {
          color: rgb(77, 77, 77);
          font-size: 15px;
          width: 100px;
          height: 30px;
          border: 0px;
          text-align: center;
          text-align-last: center;
          box-sizing: border-box;
          -moz-box-sizing: border-box; /* Firefox */
          -webkit-box-sizing: border-box; /* Safari */
          padding-left: 15px;
        }

        input {
          width: calc(100% - 120px);
          height: 60px;
          /*background-color: red;*/
          background-color: #fff;
          font-size: 20px;
          box-sizing: border-box;
          -moz-box-sizing: border-box; /* Firefox */
          -webkit-box-sizing: border-box; /* Safari */
          padding: 0px 15px 0px 20px;
          font-weight: 200;
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
        }

        button {
          font-size: 23px;
          background-color: #fff;
          border: none;
          color: #00a457;
          width: 45px;
          padding-right: 15px;
        }
      }

      .todo-handle {
        width: 600px;
        height: 30px;
        margin: 0px auto 15px auto;
        font-size: 13px;
        text-align: right;
        /*background-color: red;*/

        i {
          display: inline-block;
          padding: 0px 20px;
          color: #FF6A6A;
        }

        button {
          display: inline-block;
          background-color: #EEDC82;
          background-color: #FAE788;
          border: none;
          color: rgb(77, 77, 77);
          padding: 8px 14px;
          margin: 0px 10px 0px 0px;
          border-radius: 25px;
          transition: all 200ms linear 0s;
        }

        button:hover {
          background-color: #F3D640;
        }
      }

      .add-list::-webkit-scrollbar {
        display: none;
      }

      .add-list {
        /*width: 600px;*/
        height: calc(100% - 180px);
        overflow: auto;
        /*overflow-x: hidden;*/
        /*margin: 0px auto;*/
        /*background-color: red;*/

        li {
          width: 600px;
          /*background-color: red;*/
          z-index: 1;
          /*height: 50px;*/
          /*line-height: 50px;*/
          height: auto;
          margin: 0px auto 20px auto;
          display: flex;
          justify-content: flex-start;
          justify-items: center;
          position: relative;
          border-bottom: 1px solid #ededed;
          border-radius: 17px;
          /*阴影*/
          -moz-box-shadow: 1px 1px 5px #aaa;
          -webkit-box-shadow: 1px 1px 5px #aaa;
          box-shadow: 1px 1px 5px #DEDEDE;

          input {
            text-align: center;
            width: 40px;
            height: 100%;
            opacity: 0;
            position: absolute;
            z-index: 99;
            margin: auto 0;
            border: none; /* Mobile Safari */
            -webkit-appearance: none;
            appearance: none;
          }

          label {
            border-radius: 17px;
            /*文字溢出换行*/
            white-space: normal;
            word-break: break-all;
            word-wrap: break-word;
            line-height: 100%;
            line-height: 25px;
            font-size: 17px;
            background-color: #fff;
            display: flex;
            width: 100%;
            /*实现垂直居中*/
            align-items: center;
            padding: 20px 60px 20px 65px;
            color: #4d4d4d;
            transition: all 200ms linear 0s;
          }

          input + label {
            z-index: 10;
            background-image: url('/public/static/img/icon/todo_undone.svg');
            background-repeat: no-repeat;
            background-position: center left;
          }

          input:checked + label {
            z-index: 10;
            color: #B0B0B0;
            text-decoration: line-through;
            background-image: url('/public/static/img/icon/todo_done.svg');
          }

          button {
            display: none;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 30px;
            height: 30px;
            line-height: 30px;
            margin: auto 0;
            font-size: 30px;
            color: #cc9a9a;
            /*margin-bottom: 11px;*/
            transition: color 0.2s ease-out;
            z-index: 99;
            border: 0px;
            background-color: #fff;
          }

          button:hover {
            color: #af5b5e;
          }

          button:after {
            content: '×';
          }
        }

        li:hover button {
          display: block;
        }

        .no-todo {
          height: 50px;
          line-height: 50px;
          /*阴影*/
          -moz-box-shadow: none;
          -webkit-box-shadow: none;
          box-shadow: none;

          i {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 15px;
            color: #4d4d4d;
          }
        }
      }
    }
  }

</style>
