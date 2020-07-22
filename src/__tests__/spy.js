/**
 * With our current usage of the mock function,
 * we have to manually keep track of the original
 * implementation so we can clean up after
 * ourselves to keep our tests idempotent. Let’s
 * see how jest.spyOn can help us avoid the
 * bookkeeping and simplify our situation.
 *
 * Task: use `spyOn` to replace `fn`
 *
 * Execute: Use `npx jest --watch src/__tests__/spy.js` to watch the test
 */

const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])

  // cleanup
  utils.getWinner = originalGetWinner
})

/**
 * Hints:
 * - https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname
 *
 * Checkout master branch to see the answer.
 */
