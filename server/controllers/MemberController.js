const models = require('../models/index')

module.exports = {
    index: async (req, res) => {

        const members = await models.Member.findAll()
        let response = {
            error: false,
            data: members
        }

        return res.status(200).json(response)
    }
}