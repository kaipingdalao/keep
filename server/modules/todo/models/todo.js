const path = require('path')
let {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('todo')
}

module.exports = {
  getList: async (timestampStart, timestampEnd) => {
    return await mysql().fields('id', 'title', 'date', 'done_state', 'everyday_id')
      .where(`${timestampStart} <= date`, `date <= ${timestampEnd}`, 'done_state != 2')
      .select()
  },
  setState: async (id) => {
    let sql = `
      UPDATE todo 
      SET done_state =
      CASE
        done_state 
        WHEN 0 THEN
        1 
        WHEN 1 THEN
        0 
        END 
      WHERE
        id = ${id}
    `
    return await mysql().query(sql)
  },
  allDone: async (timestampStart, timestampEnd) => {
    return await mysql().fields('done_state')
      .update(1)
      .where('done_state !=2', `${timestampStart} <= date`, `date <= ${timestampEnd}`)
      .execute().then(res => {
        return res;
      })
  },
  add: async (title, date) => {
    const result = await mysql().fields('title', 'date')
      .insert([title, date])
      .execute()
    return result.affectedRows == 1 ? result : false
  },
  addEveryday: async (addList) => {
    let valuesList = []
    for (let item of addList) {
      valuesList.push([item.title, item.date, item.everydayId])
    }
    const res = await mysql().fields('title', 'date', 'everyday_id')
      .insert(...valuesList)
      .execute()
    console.log(res)
    return res['insertId']
  },
  del: async id => {
    return await mysql().fields('done_state').update(2).where(`id=${id}`).execute()
  },
  todoSort: async (year) => {
    return await mysql().fields('id',
      'date',
      'FROM_UNIXTIME( date, "%Y" ) AS y',
      'FROM_UNIXTIME( date, "%c" ) AS m',
      'FROM_UNIXTIME( date, "%e" ) AS d')
      .where(`FROM_UNIXTIME( date, "%Y" ) = ${year}`)
      .where('done_state != 2')
      .order('date')
      .select();
  }
}
