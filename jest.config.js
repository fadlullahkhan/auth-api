/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  rootDir: '.', // akar proyek
  testMatch: [
    '<rootDir>/src/**/*.(test|spec).[jt]s?(x)',
    '<rootDir>/tests/**/*.(test|spec).[jt]s?(x)',
  ],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  verbose: false,
};
