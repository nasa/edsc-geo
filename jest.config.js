module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'package.json',
    'package-lock.json'
  ],
  testPathIgnorePatterns: [
    'mocks.js'
  ],
  testEnvironment: 'jsdom'
}
