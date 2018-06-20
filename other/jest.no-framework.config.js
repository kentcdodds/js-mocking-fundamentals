const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../'),
  roots: [path.join(__dirname, '../src')],
  displayName: 'no-framework',
  testMatch: ['**/no-framework/**/*.js'],
  runner: require.resolve('./create-node-runner')
}
