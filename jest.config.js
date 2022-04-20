module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    '<rootDir>/src/**',
  ],
  setupFiles: [
    '<rootDir>/tests/setup.js',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  testTimeout: 30000,
};
