const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
