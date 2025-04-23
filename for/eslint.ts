import type { Linter } from 'eslint'

/**
 * Customized eslint js rules
 */

/**
 * Customized Possible Problems rules
 */
export const paperRulesForEslintBaseRules: Readonly<Linter.RulesRecord> = {
    'array-callback-return': 'error',
    // Included in recommended: constructor-super
    // Included in recommended: for-direction
    // Included in recommended: getter-return
    // Included in recommended: no-async-promise-executor
    'no-await-in-loop': 'error',
    // Included in recommended: no-class-assign
    // Included in recommended: no-compare-neg-zero
    // Included in recommended: no-cond-assign
    // Included in recommended: no-const-assign
    // Included in recommended: no-constant-binary-expression
    // Included in recommended: no-constant-condition
    'no-constructor-return': 'error',
    // Included in recommended: no-control-regex
    // Included in recommended: no-debugger
    // Included in recommended: no-dupe-args
    // Included in recommended: no-dupe-class-members
    // Included in recommended: no-dupe-else-if
    // Included in recommended: no-dupe-keys
    // Included in recommended: no-duplicate-case
    // Ignored: no-duplicate-imports
    // Included in recommended: no-empty-character-class
    // Included in recommended: no-empty-pattern
    // Included in recommended: no-ex-assign
    // Included in recommended: no-fallthrough
    // Included in recommended: no-func-assign
    // Included in recommended: no-import-assign
    // Ignored: no-inner-declarations - Ignored due to the use of ES6+ environment
    // Included in recommended: no-invalid-regexp
    // Included in recommended: no-irregular-whitespace
    // Included in recommended: no-loss-of-precision
    // Included in recommended: no-misleading-character-class
    // Included in recommended: no-new-native-nonconstructor
    // Included in recommended: no-obj-calls
    'no-promise-executor-return': 'error',
    // Included in recommended: no-prototype-builtins
    // Included in recommended: no-self-assign
    'no-self-compare': 'error',
    // Included in recommended: no-setter-return
    // Included in recommended: no-sparse-arrays
    'no-template-curly-in-string': 'error',
    // Included in recommended: no-this-before-super
    'no-undef': ['error', { typeof: true }],
    // Included in recommended: no-unexpected-multiline
    'no-unmodified-loop-condition': 'error',
    // Included in recommended: no-unreachable
    'no-unreachable-loop': 'error',
    // Included in recommended: no-unsafe-finally
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    // Included in recommended: no-unused-private-class-members
    'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
    }],
    // Ignored: no-use-before-define
    'no-useless-assignment': 'error',
    // Included in recommended: no-useless-backreference
    'require-atomic-updates': 'error',
    // Included in recommended: use-isnan
    // Included in recommended: valid-typeof
}

/**
 * Customized Suggestions rules
 */
export const paperRulesForEslintSuggestionsRules: Readonly<Linter.RulesRecord> = {
    'accessor-pairs': 'error',
    // Ignored: arrow-body-style
    // Ignored: block-scoped-var - Ignored due to the use of `let` and `const`
    camelcase: 'error',
    // Ignored: capitalized-comments - Ignored, because you can have a commented code
    // Ignored: class-methods-use-this - Ignored, because you can have a singletone class
    // Ignored: complexity - Allow any complexity for now
    'consistent-return': 'error',
    // Ignored: consistent-this - Rarely used in ES6+ environment
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    // Ignored: dot-notation - Ignored in favor of noPropertyAccessFromIndexSignature in TypeScript
    eqeqeq: 'error',
    // Ignored: func-name-matching - Ignored in favor of func-names
    'func-names': ['error', 'never'],
    // Ignored: func-style
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    // Ignored: id-denylist - Ignored, but may become handy
    // Ignored: id-length
    // Ignored: id-match - Ignored in favor of camelcase
    // Ignored: init-declarations
    'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
    // Ignored: max-classes-per-file
    // Ignored: max-depth - Consider to enable as a warning
    // Ignored: max-lines - Consider to enable as a warning
    // Ignored: max-lines-per-function
    // Ignored: max-nested-callbacks - Consider to enable as a warning
    // Ignored: max-params - Consider to enable as a warning
    // Ignored: max-statements
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    // Included in recommended: no-case-declarations
    // Ignored: no-console
    // Ignored: no-continue
    // Included in recommended: no-delete-var - Keep it, since it is a part of recommended rules
    // Ignored: no-div-regex - Ignored, because editors highlight regexes correctly
    'no-else-return': ['error', { allowElseIf: false }],
    // Included in recommended: no-empty
    // Ignored: no-empty-function
    // Included in recommended: no-empty-static-block
    // Ignored: no-eq-null - Ignored in favor of eqeqeq
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // Included in recommended: no-extra-boolean-cast
    'no-extra-label': 'error',
    // Included in recommended: no-global-assign
    'no-implicit-coercion': 'error',
    'no-implicit-globals': ['error', { lexicalBindings: true }],
    'no-implied-eval': 'error',
    // Ignored: no-inline-comments
    'no-invalid-this': 'error', // Can be disable when using TypeScript
    'no-iterator': 'error',
    'no-label-var': 'error',
    // Ignored: no-labels - Consider to re-enable if causes issues
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    // Ignored: no-loop-func - Ignored due to the use of ES6+ environment
    // Ignored: no-magic-numbers
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    // Ignored: no-nested-ternary - Ok to have it, but should be formatted correctly
    'no-new': 'error', // e.g. can use: `void new Person()` if you need to ignore the return value
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    // Included in recommended: no-nonoctal-decimal-escape
    'no-object-constructor': 'error',
    // Included in recommended: no-octal
    'no-octal-escape': 'error',
    // Ignored: no-param-reassign
    // Ignored: no-plusplus
    'no-proto': 'error',
    // Included in recommended: no-redeclare
    // Included in recommended: no-regex-spaces
    // Ignored: no-restricted-exports - May be useful to restricts `export default` declarations
    'no-restricted-globals': ['error', 'event', 'atob', 'btoa'], // atob and btoa are deprecated and don't support UTF-8: https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
    // Ignored: no-restricted-imports
    // Ignored: no-restricted-properties
    // Ignored: no-restricted-syntax
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    // Included in recommended: no-shadow-restricted-names
    // Ignored: no-ternary
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    // Ignored: no-undefined - Not needed sicne ES5
    // Ignored: no-underscore-dangle - Enabling this rule can easily break existing code without providing any real benefit
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    // Included in recommended: no-unused-labels
    'no-useless-call': 'error',
    // Included in recommended: no-useless-catch
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    // Included in recommended: no-useless-escape
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    // Ignored: no-void - void is useful for expicitly ignoring return values
    // Ignored: no-warning-comments
    // Included in recommended: no-with
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    // Ignored: prefer-destructuring
    'prefer-exponentiation-operator': 'error',
    // Ignored: prefer-named-capture-group
    'prefer-numeric-literals': 'error',
    // Ignored: prefer-object-has-own - Ignore for now as it requires ES2022+ environment
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    // Ignored: prefer-template
    radix: 'error',
    // Ignored: require-await
    // Ignored: require-unicode-regexp
    // Included in recommended: require-yield
    // Ignored: sort-imports
    // Ignored: sort-keys
    // Ignored: strict
    'symbol-description': 'error',
    // Ignored: vars-on-top - Ignored due to the use of `let` and `const`
    yoda: 'error',
}

/**
 * Customized Layout & Formatting rules
 */
export const paperRulesForEslintLayoutAndFormattingRules: Readonly<Linter.RulesRecord> = {
    'unicode-bom': 'error',
}

/**
 * All customized eslint rules
 */
export const paperRulesForEslint: Readonly<Linter.RulesRecord> = {
    ...paperRulesForEslintBaseRules,
    ...paperRulesForEslintSuggestionsRules,
    ...paperRulesForEslintLayoutAndFormattingRules,
}

export default paperRulesForEslint
