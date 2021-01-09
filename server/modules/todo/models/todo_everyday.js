const path = require('path')
const {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('todo_everyday')
}

module.exports = {
  getEveryDayTodoList: async timestampStart => {
    return mysql().where('end_time=0', `start_time < ${timestampStart}`).select()
  },

  addEveryDayTodo: async (title, date) => {
    const result = await mysql().fields('title', 'start_time', 'end_time')
      .insert([title, date, 0])
      .execute()
    return result.affectedRows == 1 ? result : false
  },
  delEverydayTodo: async id => {
    return await mysql().fields('end_time')
      .update(parseInt(new Date().getTime() / 1000))
      .where(`id=${id}`)
      .execute()
  }
}
