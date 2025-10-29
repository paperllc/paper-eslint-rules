// noinspection JSUnusedGlobalSymbols
export const paperRulesForUnicorn = {
    'unicorn/filename-case': 'off', // Don't restrict file naming
    'unicorn/no-null': 'off', // null is ok
    'unicorn/prevent-abbreviations': 'off', // Don't restrict abbreviations
    'unicorn/consistent-function-scoping': 'off', // Don't restrict function scoping
    'unicorn/explicit-length-check': 'off', // Disable due to a false positive with context.size in React.useContext()
    'unicorn/prefer-global-this': 'off', // Disable - window is ok for now
    'unicorn/numeric-separators-style': 'off', // Disable - numeric separators are not needed here
    'unicorn/prefer-top-level-await': 'off', // Disable - top-level await is supported from ES2022
    'unicorn/prefer-ternary': 'off', // Disable - sometimes if-else is more readable
    'unicorn/no-array-reverse': 'off', // We still use ES2022, can be enabled since ES2023
    'unicorn/prefer-response-static-json': 'off', // We still use ES2022, can be enabled since ES2023
};
//# sourceMappingURL=unicorn.js.map