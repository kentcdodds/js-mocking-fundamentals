/**
 * After using the assertions provided by Jest, let's implement them ourselves.
 *
 * Task: Write a function `fn` that creates a mock function has `mock.calls`.
 *
 * Execute: Use `npx jest --watch src/no-framework/mock-fn.js` to watch the test
 */

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Your Code:

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler'],
])

// cleanup
utils.getWinner = originalGetWinner

/**
 * Checkout master branch to see the answer.
 */
