const {getLog, addLog, editLog, logSort} = require('../models/log')

module.exports = {

  log: async (date) => {
    return await getLog(date)
  },

  edit: async (content, date) => {
    const log = await getLog(date)
    console.log(log)
    return !!!log ? await addLog(content) : await editLog(log[0].id,content, date)
  },

  logDateSort: async (year,month) => {
    return await logSort(year, month)
  }
}
