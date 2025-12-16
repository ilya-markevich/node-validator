export default {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  transform: { '^.+\\.js$': 'babel-jest' },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['js', 'json', 'node'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
