import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    },
    testMatch: [
      '**/__tests__/**/*.ts?(x)'
    ],
    testPathIgnorePatterns: [
      'dist'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['json', 'text', 'lcov', 'clover', 'html'],
  };
  
  export default config;