const {defaults} = require('jest-config');
const tsJestPreset = require('jest-preset-angular/jest-preset');
//console.log(defaults);
const config = Object.assign(defaults,tsJestPreset);
config.globals['ts-jest'].tsConfig = '<rootDir>/tsconfig.spec.json';
config.moduleNameMapper = {
    '^src/(.*)$': '<rootDir>/$1',
    '^app/(.*)$': '<rootDir>/app/$1',
    '^assets/(.*)$': '<rootDir>/assets/$1',
    '^environments/(.*)$': '<rootDir>/environments/$1'
};


module.exports = config;
