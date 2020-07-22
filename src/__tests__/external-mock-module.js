/**
 * Often you’ll want to mock the same file throughout
 * all the tests in your codebase. So let’s make a
 * shared mock file in Jest's __mocks__ directory which
 * Jest can load for us automatically.
 *
 * Task: refactor the code to use an external mock module.
 *
 * Execute: Use `npx jest --watch src/__tests__/external-mock-module.js` to watch the test
 */

const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  }
})

test('returns winner', () => {
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})

/**
 * Hints:
 * - https://jestjs.io/docs/en/manual-mocks
 *
 * Checkout master branch to see the answer.
 */
