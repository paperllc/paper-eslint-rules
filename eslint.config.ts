import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { paperRulesForEslint } from './for/eslint.js'
import { getPaperRulesForStylistic, type PaperStylisticCustomizeOptions } from './for/stylistic.js'

const stylisticCustomizeOptions: PaperStylisticCustomizeOptions = {
    semi: false,
    jsx: true,
    arrowParens: true,
    quoteProps: 'as-needed',
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
            ...paperRulesForEslint,
            ...getPaperRulesForStylistic(stylisticCustomizeOptions),

            '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
        },
    },
]
