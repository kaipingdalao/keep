const path = require('path')
const {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('day_log')
}

module.exports = {
  getLog: async (timestampStart, timestampEnd) => {
    // let sql = `SELECT id,content,date_time FROM day_log WHERE date_time> $ { timestampStart } AND date_time< $ { timestampEnd}`
    return await mysql().fields('id', 'content', 'date_time')
      .where(`date_time > ${timestampStart}`, `date_time < ${timestampEnd}`)
      .select()
  },
  logSort: async (year) => {
    // let sql = `SELECT id,date_time,FROM_UNIXTIME(date_time,"%Y") AS y,FROM_UNIXTIME(date_time,"%c") AS m,FROM_UNIXTIME(date_time,"%e") AS d FROM day_log WHERE FROM_UNIXTIME(date_time,"%Y")=$ { YEAR } ORDER BY date_time`
    return await mysql().fields('id',
      'date_time',
      'FROM_UNIXTIME( date_time, "%Y" ) AS y',
      'FROM_UNIXTIME( date_time, "%c" ) AS m',
      'FROM_UNIXTIME( date_time, "%e" ) AS d')
      .where(`FROM_UNIXTIME( date_time, "%Y" ) = ${year}`)
      .order('date_time')
      .select()
  }
}
