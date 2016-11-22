'use strict'

const tap = require('tap')
const unique = require('../../index')
const uniqueFile = unique('.pdf')

tap.ok(unique(), 'generates unique on empty')

tap.equal(true, uniqueFile.indexOf('.pdf') > -1, 'generates file with correct ending')
