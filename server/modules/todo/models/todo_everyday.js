const path = require('path')
const {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('todo_everyday')
}

module.exports = {
  getEveryDayTodoList: async timestampStart => {
    return mysql().where('end_date=0', `start_date <= ${timestampStart}`).select()
  },

  addEveryDayTodo: async (title, date) => {
    const result = await mysql().fields('title', 'start_date', 'end_date')
      .insert([title, date, 0])
      .execute()
    return result.affectedRows == 1 ? result : false
  },
  delEverydayTodo: async id => {
    return mysql().fields('end_date')
      .update(parseInt(new Date().getTime() / 1000))
      .where(`id=${id}`)
      .execute()
  }
}
