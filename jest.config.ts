/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
	preset: 'ts-jest',

	bail: 0,

	clearMocks: true,

	coverageProvider: 'v8',

	testEnvironment: 'node',

	rootDir: './__tests__/',

	moduleFileExtensions: ['ts', 'js', 'json'],

	resetMocks: true,

	testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[tj]s?'],
}
