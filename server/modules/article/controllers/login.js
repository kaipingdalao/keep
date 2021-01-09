const {get_user} = require('../models/user')

const controller = {
    test: async (ctx) => {
        const data = await get_user()
        return data
    },
    testt: (ctx) => {
        return 111
    }
}

module.exports = controller
