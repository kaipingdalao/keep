const path = require('path')
let {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('todo')
}

module.exports = {
  getList: async (timestampStart, timestampEnd) => {
    return await mysql().fields('id', 'title', 'date', 'done_state as doneState', 'everyday_id as everydayId')
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
    // const data = await mysql().fields('id',
    //   'date',
    //   'title',
    //   'done_state',
    //   'FROM_UNIXTIME( date, "%Y" ) AS y',
    //   'FROM_UNIXTIME( date, "%c" ) AS m',
    //   'FROM_UNIXTIME( date, "%e" ) AS d')
    //   .where(`FROM_UNIXTIME( date, "%Y" ) = ${year}`)
    //   .where('done_state != 2')
    //   .order('date')
    //   .select();

    const sql = `SELECT date,IF (done_sum=count,1,0) AS all_done FROM (SELECT FROM_UNIXTIME(date/1000,'%Y-%m-%d') AS date,sum(done_state) AS done_sum,COUNT(*) AS count FROM todo WHERE FROM_UNIXTIME(date/1000,"%Y")=${year} AND (done_state=1 OR done_state=0) GROUP BY FROM_UNIXTIME(date/1000,'%Y-%m-%d')) AS sort`
    const res =  await mysql().query(sql)
    const data = {}
    res.forEach(res => {
      data[res.date] = res.all_done
    })
    return data
  }
}
