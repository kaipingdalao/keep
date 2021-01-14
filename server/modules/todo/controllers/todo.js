const {getList, setState, allDone, add, del, addEveryday, todoSort} = require('../models/todo')
const {getEveryDayTodoList, addEveryDayTodo, delEverydayTodo} = require('../models/todo_everyday')

module.exports = {
  todoList: async (timestampStart, timestampEnd) => {
    const [everydayList, todoList] = await Promise.all([
      getEveryDayTodoList(timestampStart),
      getList(timestampStart, timestampEnd)
    ])

    const addList = []
    for (let everyday of everydayList) {
      let result = todoList.find(item => {
        return item.everyday_id == everyday.id
      })
      result == undefined && addList.push({
        title: everyday.title,
        date: timestampStart,
        doneState: 0,
        everydayId: everyday.id
      })
    }
    // 如果传入日期为当前日期，则添加一条数据，否则只追加到临时
    const selectDate = new Date(timestampStart * 1000),
      nowDate = new Date()
    let newId = addList.length > 0
      && selectDate.getFullYear() == nowDate.getFullYear()
      && selectDate.getMonth() == nowDate.getMonth()
      && selectDate.getDate() == nowDate.getDate()
      && await addEveryday(addList)

    addList.forEach(value => {
      value.id = newId
      newId++
    })
    return [...todoList, ...addList]
  },
  todoState: async id => {
    return await setState(id)
  },
  todoAllDone: async (timestampStart, timestampEnd) => {
    return await allDone(timestampStart, timestampEnd)
  },
  addTodo: async (title, date, type) => {
    return type == 'once' ? await add(title, date) : await addEveryDayTodo(title, date)
  },
  delTodo: async (id, everydayId) => {
    return everydayId && await delEverydayTodo(everydayId) || id && await del(id)
  },
  todoDateSort: async (year) => {
    return await todoSort(year)
  }
}
