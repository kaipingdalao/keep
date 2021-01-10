const router = require('koa-router')(); //注意：引入的方式
const todoController = require('../controllers/todo')
const mm = require('../../../lib/mysql')

// router.use('/news', async (ctx, next) => {
//     console.log('我是article中间件')
//     await next()
// })
// 当前页面可写中间件
router.get('/getTodoList', async ctx => {
  const year = Number(ctx.request.query.year),
    month = Number(ctx.request.query.month),
    day = Number(ctx.request.query.day),
    {startTiemstamp, endTiemstamp} = ctx.dateToTiemstamp(year, month, day),
    data = await todoController.todoList(startTiemstamp, endTiemstamp)
  ctx.send(200, data)
})
router.get('/setTodoState', async ctx => {
  const id = Number(ctx.request.query.id),
    data = await todoController.todoState(id)
  ctx.send(data.affectedRows == 1 ? 200 : 400)
})
router.get('/todoAllDone', async ctx => {
  const {year, month, day} = ctx.request.query,
    timestamp = ctx.dateToTiemstamp(year, month, day),
    data = await todoController.todoAllDone(timestamp.startTiemstamp, timestamp.endTiemstamp)
  ctx.send(!!data.affectedRows ? 200 : 400)
})
router.get('/addTodo', async ctx => {
  const {title, year, month, day, todoType} = ctx.request.query,
    {startTiemstamp} = ctx.dateToTiemstamp(year, month, day),
    data = await todoController.addTodo(title, startTiemstamp, todoType)
  !!data['insertId'] ? ctx.send(200, {newTodoId: data['insertId']}) : ctx.send(400)
})
router.get('/delTodo', async ctx => {
  console.log(ctx.request.query.id, ctx.request.query.everydayId)
  const id = Number(ctx.request.query.id),
    everydayId = ctx.request.query.everydayId ? ctx.request.query.everydayId : false,
    data = await todoController.delTodo(id, everydayId)
  ctx.send(data.affectedRows == 1 ? 200 : 400)
})

module.exports = router
