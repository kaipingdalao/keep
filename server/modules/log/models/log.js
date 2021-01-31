const path = require('path')
const {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('day_log')
}

module.exports = {
  getLog: async (date) => {
    // let sql = `SELECT id,content,date_time FROM day_log WHERE date_time> $ { timestampStart } AND date_time< $ { timestampEnd}`
    // return await mysql().fields('id', 'content', 'date_time')
    //   .where(`date_time > ${timestampStart}`, `date_time < ${timestampEnd}`)
    //   .select()

    return await mysql().fields('id', 'content', 'FROM_UNIXTIME(date/1000,\'%Y-%m-%d\') as date')
      .where(`FROM_UNIXTIME(date/1000,'%Y-%m-%d') = FROM_UNIXTIME(${date}/1000,\'%Y-%m-%d\')`)
      .select()

  },
  addLog: async content => {
    const date = new Date().getTime()
    return await mysql().fields('content', 'date')
      .insert([content, date])
      .execute()
  },
  editLog: async (id,content, date) => {
    return await mysql().fields('content', 'date')
      .update(content, date)
      .where(`id=${id}`)
      .execute()
  },
  logSort: async (year) => {
    // let sql = `SELECT id,date_time,FROM_UNIXTIME(date_time,"%Y") AS y,FROM_UNIXTIME(date_time,"%c") AS m,FROM_UNIXTIME(date_time,"%e") AS d FROM day_log WHERE FROM_UNIXTIME(date_time,"%Y")=$ { YEAR } ORDER BY date_time`
    return await mysql().fields('id',
      'date',
      'FROM_UNIXTIME( date/1000, "%Y" ) AS y',
      'FROM_UNIXTIME( date/1000, "%c" ) AS m',
      'FROM_UNIXTIME( date/1000, "%e" ) AS d')
      .where(`FROM_UNIXTIME( date/1000, "%Y" ) = ${year}`)
      .order('date')
      .select()
  }
}
