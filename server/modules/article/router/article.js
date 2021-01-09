const fs = require('fs')
const path = require('path')
const router = require('koa-router')(); //注意：引入的方式
const articleController = require('../controllers/article')

// router.use('/news', async (ctx, next) => {
//     console.log('我是article中间件')
//     await next()
// })
// 当前页面可写中间件
router.get('/articleList', async (ctx, next) => {
    await next()
  },
  async ctx => {
    let data = await articleController.articleList()
    ctx.send(200, data)
  })

router.get('/category', async ctx => {
  let data = await articleController.categoryList()
  ctx.send(200, data)
})

router.get('/article/:id', async ctx => {
  // !ctx.params.id && throw new Error()
  if (!ctx.params.id) {
    throw new Error('articleId is null')
  }
  let data = await articleController.article(ctx.params.id)
  ctx.send(200, data[0])
})

router.post('/add', async ctx => {
  const {title, content, categoryId} = ctx.request.body
  if (!title || !content || !categoryId) {
    throw new Error('field is null')
  }
  let imgName = ''
  if (ctx.request.files.articleImg) {
    imgName = ctx.request.files.articleImg.name
    ctx.upload('articleImg', `${ctx.settings.ROOT_DIR}public/upload/article/img`)
  }

  const data = await articleController.addArticle(title, content, categoryId, imgName)
  ctx.send(data.affectedRows == 1 ? 200 : 400)
})
module.exports = router
