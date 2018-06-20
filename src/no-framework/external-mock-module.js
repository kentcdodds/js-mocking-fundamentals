require('../__no-framework-mocks__/utils') // prime the cache
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Ken Wheeler', 'Kent C. Dodds'],
  ['Ken Wheeler', 'Kent C. Dodds']
])

// cleanup
delete require.cache[utilsPath]
