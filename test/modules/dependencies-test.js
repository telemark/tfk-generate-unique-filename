const tap = require('tap')
const { dependencies, devDependencies } = require('../../package.json')

tap.equal(true, true, 'tap works ok')

Object.keys(dependencies).forEach((dependency) => {
  const module = require(dependency)
  tap.ok(module, `${dependency} loads ok`)
})

Object.keys(devDependencies).forEach((dependency) => {
  const module = require(dependency)
  tap.ok(module, `${dependency} loads ok`)
})
