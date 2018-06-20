const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds']
  ])
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Ken Wheeler',
    'Kent C. Dodds'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Ken Wheeler',
    'Kent C. Dodds'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
