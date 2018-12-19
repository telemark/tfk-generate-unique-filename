const uuid = require('uuid')

module.exports = ending => `${uuid()}${ending || ''}`
