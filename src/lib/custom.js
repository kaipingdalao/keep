/**
 * 时间转时间戳(秒)
 * @param {int} year 年
 * @param {int} month 月
 * @param {int} day 日
 * return {int} 时间戳(毫秒)
 **/
const dateForTimestamp = (year, month, day) => {
    month--
    let timestamp = new Date(year, month, day).getTime()
    timestamp += ''
    return Number(timestamp.slice(0, -3))
}

/**
 * 时间戳转当日开始，结束时间戳(秒)
 * @param {int} timestamp 时间戳
 * return {obj} 开始和结束的时间戳
 **/
const timestampForStartEnd = (timestamp) => {
    let date = new Date(timestamp),
        [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()],
        timestampStart = new Date(year, month, day).getTime(),
        timestampEnd = new Date(year, month, day + 1).getTime() - 1
    timestampStart = Number((timestampStart += '').slice(0, -3))
    timestampEnd = Number((timestampEnd += '').slice(0, -3))
    return {
        timestampStart,
        timestampEnd
    }
}

export {
    dateForTimestamp,
    timestampForStartEnd
}
