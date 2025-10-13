// noinspection JSUnusedGlobalSymbols

import type { Linter } from 'eslint'

export const paperRulesForUnicorn: Readonly<Linter.RulesRecord> = {
    'unicorn/filename-case': 'off', // Don't restrict file naming
    'unicorn/no-null': 'off', // null is ok
    'unicorn/prevent-abbreviations': 'off', // Don't restrict abbreviations
    'unicorn/consistent-function-scoping': 'off', // Don't restrict function scoping
    'unicorn/explicit-length-check': 'off', // Disable due to a false positive with context.size in React.useContext()
    'unicorn/prefer-global-this': 'off', // Disable - window is ok for now
    'unicorn/numeric-separators-style': 'off', // Disable - numeric separators are not needed here
    'unicorn/prefer-top-level-await': 'off', // Disable - top-level await is supported from ES2022
    'unicorn/prefer-ternary': 'off', // Disable - sometimes if-else is more readable
}
