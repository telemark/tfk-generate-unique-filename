const uuid = require('uuid-random')

module.exports = ending => `${uuid()}${ending || ''}`
