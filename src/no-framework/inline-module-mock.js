function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p2)
  }
}

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
