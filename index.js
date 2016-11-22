'use strict'

const uuid = require('uuid')

module.exports = (ending) => {
  return `${uuid()}${ending || ''}`
}
