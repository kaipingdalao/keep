const {getLog, logSort} = require('../models/log')

module.exports = {

    log: async (timestampStart, timestampEnd) => {
        return await getLog(timestampStart, timestampEnd)
    },

    logDateSort: async (year) => {
        return await logSort(year)
    }
}
