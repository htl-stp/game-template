import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		ignores: [
			'**/.angular/**',
			'**/node_modules/**',
			'**/dist/**',
			'**/.idea/**',
			'**/.astro/**',
		],
	},
	tseslint.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
		rules: {
			eqeqeq: ['error', 'always'],
			'no-eval': 'error',
			'no-var': 'error',
			'arrow-spacing': 'error',
			curly: 'error',
			'prefer-const': 'error',
			'no-debugger': 'error',
			'no-duplicate-imports': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			semi: ['error', 'always'],
			quotes: ['error', 'single', { avoidEscape: true }],

			'no-unused-vars': ['off'],
			'@typescript-eslint/no-unused-vars': ['off'],

			'no-undef': 'off',

			'no-throw-literal': 'error',
			'no-process-exit': 'warn',
			'no-param-reassign': ['error', { props: false }],
			'prefer-promise-reject-errors': 'error',
			'no-async-promise-executor': 'error',

			indent: ['error', 'tab', { SwitchCase: 1 }],
		},
	},
	{
		files: ['src/games/**/*.{js,ts}'],
		rules: {
			'no-restricted-syntax': [
				'error',
				{
					selector: "CallExpression[callee.property.name='addEventListener']",
					message:
						'Do not use addEventListener in your game! Use provided methods in @engine instead.',
				},
				{
					selector: 'Literal[value=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/]',
					message: 'Hex colors are not allowed. Only use colors from @engine/config.ts',
				},

				{
					selector: "Identifier[name='document']",
					message: 'Do not use document in your game. (identifier)',
				},
				{
					selector: "Identifier[name='document']",
					message: 'Do not use window in your game. (identifier)',
				},

				{
					selector: "MemberExpression[object.name='document']",
					message: 'Do not use document in your game. (access)',
				},
				{
					selector: "MemberExpression[object.name='window']",
					message: 'Do not use window in your game. (access)',
				},
			],
		},
	},
	{ files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
]);
