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
      statements: 90,
      branches: 80,
      functions: 90,
      lines: 90,
    },
  },
  testTimeout: 30000,
};
