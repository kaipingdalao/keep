<template>
  <div id="Log">
    <div class="date-picker">
      <calendar :startDate="dateState.monthFirstDay"
                :endDate="dateState.monthEndDay"
                :options="{dataMin:90, dataMax:10000, inRangeColor:['red', 'yellow']}"
      ></calendar>
    </div>
        <div class="todo-box">
          <div class="add-todo">
            <select @change="state.todo.type">
              <option value="once">once</option>
              <option value="everyday">everyday</option>
            </select>
            <input placeholder="add Todo" v-model="state.todo.title" @keyup.enter="todos.add(state.todo)"/>
            <button @click="todos.add(state.todo)">+</button>
          </div>
          <div class="todo-handle" v-show="todos.undone == 0 ? false : true">
            <i>{{todos.undone}} item undone</i>
            <button @click="todos.allDone(dateFormat(dateState.date))">all Done</button>
          </div>
          <ul class="add-list">
            <li class="no-todo" v-show="todos.todoList.length == 0 ? true : false">
              <i>今天还没有代办事项哟</i>
            </li>
            <li v-for="(item,index) in todos.todoList">
              <input type="checkbox"
                     :checked="item.done_state == 0 ? false : true"
                     @click="todos.changeState(item, index)"/>
              <label>{{item.title}}</label>
              <button @click="todos.del(item, index)"></button>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
  import calendar from '/src/components/common/Calendar.vue'
  import {reactive, toRefs, computed, onMounted, watchEffect, watch, inject} from 'vue'
  import http from '/src/lib/http'

  const dateState = reactive({
    date: new Date(),
    year: computed(() => dateState.date.getFullYear()),
    month: computed(() => dateState.date.getMonth()),
    day: computed(() => dateState.date.getDate()),
    monthFirstDay: computed(() => new Date(dateState.year, dateState.month, 1)),
    monthEndDay: computed(() => new Date(dateState.year, dateState.month, 0))
  })

  const todos = reactive({
    todoList: [],
    dateSort: [],
    add: todo => {
      http('get', '/todo/addTodo', {
        title: todo.title,
        ...todo.date,
        todoType: todo.type
      }).then(res => {
        if (res.code == 200) {
          console.log(res)
          const date = new Date(todo.date.year, todo.date.month, todo.date.day)
          todo = {...todo, date: date.getTime(), id: res.data.newTodoId, done_state: false}
          todos.todoList.unshift(todo)
          console.log('成功')
          console.log(todos.todoList)
        } else {
          console.log('失败')
        }
      })
    },
    set: todo => {
    },
    del: (todo,index) => {
      const data = {
        id: todo.id,
        everydayId: todo.everydayId
      }
      http('get', '/todo/delTodo', {...data}).then(res => {
        if (res.code == 200) {
          todos.todoList.splice(index, 1)
          console.log('成功')
        } else {
          console.log('失败')
        }
      })
    },
    changeState: (todo, index) => {
      http('get', '/todo/setTodoState', {id: todo.id}).then(res => {
        if (res.code == 200) {
          console.log('成功')
          todos.todoList[index].done_state = !todos.todoList[index].done_state
        } else {
          console.log('失败')
        }
      })
    },
    allDone: date => {
      http('get', '/todo/todoAllDone', {...date}).then(res => {
        if (res.code == 200) {
          console.log('成功')
          for (let item of todos.todoList) {
            item.done_state = true
          }
        } else {
          console.log('失败')
        }
      })
    },
    undone: computed(() => {
      let sum = 0
      for (let item of todos.todoList) !item.done_state && sum++
      return sum
    })
  })

  export default {
    components: {
      calendar
    },
    setup() {
      const state = reactive({
        text: '',
        todo: {
          title: '',
          type: 'once',
          date: {
            year: dateState.year,
            month: dateState.month +1,
            day: dateState.day
          }
        }
      })
      onMounted(() => {
        getTodoList({year: dateState.year, month: dateState.month + 1, day: dateState.day})
          .then(res => todos.todoList = res.data)
        todoDateSort(dateState.year).then(res => todos.dateSort = res.data)
        // console.log(todoDateSort(2021))
      })
      return {
        dateState, formatDate, dateFormat, todos, state
      }
    }
  }

  // 格式化时间， date对象转 yyyy-MM-dd 格式时间
  const formatDate = date => {
    const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    return `${date.getFullYear()}-${month}-${day}`
    // return date.toLocaleDateString().replace(/\//g, '-')
  }

  // date: year,month,day
  const getTodoList = async date => {
    return await http('get', '/todo/getTodoList', {...date})
  }

  // 获取日期统计
  const todoDateSort = async year => {
    return await http('get', '/todo/todoDateSort', {year})
  }

  // 时间转换年月日
  const dateFormat = date => {
    const year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate()
    return {year, month, day}
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
