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
    // return await logSort(year, month)
    const res = await logSort(year, month)
    const data = {}
    const date = new Date()
    for (let i of res) {
      date.setTime(i.date)
      const y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate()
      data[`${y}-${m < 10 ? '0'+m : m}-${d < 10 ? '0'+d : d}`] = 1
    }

    return data
  }
}
