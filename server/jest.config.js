import path from 'path';
import { fileURLToPath } from 'url';

const rootDirector = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

export default {
    testEnvironment: 'node',
    testEnvironmentOptions: {
        NODE_ENV: 'test',
    },
    restoreMocks: true,
    coveragePathIgnorePatterns: [
        'node_modules',
        'src/config',
        'src/app.js',
        'tests',
    ],
    roots: [`${rootDirector}`],
    transform: {},
    coverageReporters: ['text', 'lcov', 'clover', 'html'],
    // modulePaths: [`${rootDirector}`],
    // moduleDirectories: ['node_modules', `${rootDirector}/src`],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^#(.*)$': `${rootDirector}/src/$1`,
        '^#root(.*)$': `${rootDirector}/$1`,
    },
};
