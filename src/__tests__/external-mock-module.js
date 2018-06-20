const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds']
  ])
})
