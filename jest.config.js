// source : https://blog.jarrodwatts.com/how-to-set-up-nextjs-with-jest-react-testing-library-and-playwright
module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules) https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/cypress/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', 'src'],
  testResultsProcessor: 'jest-sonar-reporter',
};
