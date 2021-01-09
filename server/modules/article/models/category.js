const path = require('path')
const {mysqlCustom} = require(path.join(process.cwd(), './lib/mysql'))

const mysql = () => {
  return new mysqlCustom().table('category')
}

module.exports = {
  getCategoryList: async () => {
    return await mysql().fields('id', 'title').select()
  }
}
