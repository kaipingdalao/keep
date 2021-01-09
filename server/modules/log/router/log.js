const router = require('koa-router')(); //注意：引入的方式
const logController = require('../controllers/log')

// router.use('/news', async (ctx, next) => {
//     console.log('我是article中间件')
//     await next()
// })
// 当前页面可写中间件
router.get('/getLog', async ctx => {
    const timestampStart = Number(ctx.request.query.timestampStart),
        timestampEnd = Number(ctx.request.query.timestampEnd)
    if (!timestampStart || !timestampEnd) throw new Error('参数错误')
    let data = await logController.log(timestampStart, timestampEnd)
    data = data.length !== 0 ? data[0] : {
        id: '',
        content: `### 今天是一条咸鱼`,
        dateTime: ''
    }
    ctx.send(200, data)
})

// 根据年获取日记日期
router.get('/logDateSort', async ctx => {
    const year = Number(ctx.request.query.year)
    let data = await logController.logDateSort(year)
    ctx.send(200, data)
})

module.exports = router
