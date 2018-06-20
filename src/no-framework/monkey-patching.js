const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p2

const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup
utils.getWinner = originalGetWinner
