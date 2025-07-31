// noinspection JSUnusedGlobalSymbols

import type { Linter } from 'eslint'

export const paperRulesForTypescript: Readonly<Linter.RulesRecord> = {
    '@typescript-eslint/no-unused-vars': 'off', // Covered by TypeScript
}
