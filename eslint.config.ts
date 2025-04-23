import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { lintjsRulesForEslint } from './for/eslint.js'
import { getLintjsRulesForStylistic } from './for/stylistic.js'

const stylisticCustomizeOptions: StylisticCustomizeOptions = {
    pluginName: '@stylistic',
    indent: 4,
    quotes: 'single',
    semi: false, // Supported
    jsx: true, // Supported
    arrowParens: true, // Supported
    braceStyle: 'stroustrup',
    blockSpacing: true,
    quoteProps: 'as-needed', // Supported
    commaDangle: 'always-multiline',
}

export default [
    {
        ignores: [
            '.git/**',
            '.github/**',
            '.idea/**',
            '.vscode/**',
            './for/**/*.d.ts',
            './for/**/*.js',
            './for/**/*.js.map',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    stylistic.configs.customize(stylisticCustomizeOptions),
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node },
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        rules: {
            ...lintjsRulesForEslint,
            ...getLintjsRulesForStylistic(stylisticCustomizeOptions),

            '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
        },
    },
]
