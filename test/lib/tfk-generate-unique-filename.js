'use strict'

const tap = require('tap')
const unique = require('../../index')
const uniqueFile = unique('.pdf')

tap.ok(unique(), 'generates unique on empty')

tap.equal(true, uniqueFile.indexOf('.pdf') > -1, 'generates file with correct ending')

tap.equal(unique().length, 36, 'id without ending has correct length')

tap.equal(unique('.pdf').length, 40, 'id with ending has correct length')
