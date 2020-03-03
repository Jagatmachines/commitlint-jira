module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts)',
    '!packages/commitlint-jira-e2e-tests/**',
  ],
  coverageThreshold: {
    global: {
      statements: 86,
      branches: 68,
      functions: 94,
      lines: 93,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/packages/commitlint-jira-e2e-tests/'],
  preset: 'ts-jest',
}
