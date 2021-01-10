const {getArticleList, getArticle, addArticle} = require('../models/article')
const {getCategoryList} = require('../models/category')

module.exports = {

  articleList: async (page, pagesize) => {
    return await getArticleList(page, pagesize)
  },

  article: async id => {
    return await getArticle(id)
  },

  categoryList: async () => {
    return await getCategoryList()
  },

  addArticle: async (title, content, categoryId, imgName) => {
    const date = parseInt(new Date().getTime() / 1000)
    return await addArticle(title, content, categoryId, date, imgName)
  }

}
