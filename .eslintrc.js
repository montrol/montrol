module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  ecmaFeatures: {
    sourceType: 'module'
  },
  rules: {
    /* Possible errors */
    'comma-dangle': 1,
    'no-cond-assign': 1,
    'no-console': 1,
    'no-constant-condition': 1,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-dupe-args': 1,
    'no-dupe-keys': 1,
    'no-duplicate-case': 1,
    'no-empty': 1,
    'no-empty-character-class': 1,
    'no-ex-assign': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-semi': 1,
    'no-func-assign': 1,
    'no-inner-declarations': 1,
    'no-invalid-regexp': 1,
    'no-irregular-whitespace': 1,
    'no-negated-in-lhs': 1,
    'no-obj-calls': 1,
    'no-regex-spaces': 1,
    'no-sparse-arrays': 1,
    'no-unexpected-multiline': 1,
    'no-unreachable': 1,
    'use-isnan': 1,
    'valid-typeof': 1,

    /* Best practices */
    'accessor-pairs': 1,
    'array-callback-return': 0,
    'consistent-return': 0,
    'curly': [1, 'multi-or-nest', 'consistent'],
    'default-case': 1,
    'dot-location': [1, 'property'],
    'dot-notation': [1, { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }],
    'eqeqeq': 1,
    'no-alert': 1,
    'no-caller': 1,
    'no-case-declarations': 1,
    'no-div-regex': 1,
    'no-else-return': 1,
    'no-empty-function': 1,
    'no-empty-pattern': 1,
    'no-eq-null': 1,
    'no-eval': 1,
    'no-extend-native': 2,
    'no-extra-bind': 1,
    'no-extra-label': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-implicit-coercion': 1,
    'no-implicit-globals': 1,
    'no-implied-eval': 1,
    'no-invalid-this': 1,
    'no-iterator': 1,
    'no-labels': 1,
    'no-lone-blocks': 1,
    'no-loop-func': 1,
    'no-magic-numbers': 0,
    'no-multi-spaces': [1, { exceptions : { Array: true, Property: true, VariableDeclarator: true, ImportDeclaration: true }}],
    'no-multi-str': 1,
    'no-native-reassign': 1,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-wrappers': 1,
    'no-octal': 1,
    'no-octal-escape': 1,
    'no-param-reassign': 0,
    'no-proto': 1,
    'no-redeclare': 1,
    'no-return-assign': 0,
    'no-script-url': 1,
    'no-self-assign': 1,
    'no-self-compare': 1,
    'no-sequences': 1,
    'no-throw-literal': 1,
    'no-unmodified-loop-condition': 1,
    'no-unused-expressions': 0,
    'no-unused-labels': 1,
    'no-useless-call': 1,
    'no-useless-concat': 1,
    'no-useless-escape': 1,
    'no-void': 1,
    'no-with': 1,
    'wrap-iife': 1,

    /* Variables*/
    'no-delete-var': 1,
    'no-label-var': 1,
    'no-restricted-globals': 1,
    'no-shadow': 0,
    'no-shadow-restricted-names': 1,
    'no-undef': 1,
    'no-undef-init': 1,
    'no-unused-vars': [1, {'vars': 'all', 'args': 'none' }],
    'no-use-before-define': [1, { "functions": false }],

    /* Node.js and CommonJS */
    'callback-return': 0,
    'global-require': 1,
    'handle-callback-err': 1,
    'no-mixed-requires': 1,
    'no-new-require': 1,
    'no-path-concat': 1,
    'no-process-env': 1,
    'no-process-exit': 1,

    /* Stylistic issues */
    'array-bracket-spacing': [1, 'never'],
    'block-spacing': [1, 'always'],
    'brace-style': [1, '1tbs', { "allowSingleLine": true }],
    'camelcase': 1,
    'comma-spacing': 1,
    'comma-style': [1, 'first', { exceptions: { ArrayExpression: true, ObjectExpression: true }}],
    'consistent-this': [1, 'self'],
    'eol-last': 1,
    'indent': [1, 2],
    'key-spacing': [0, { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'lines-around-comment': 1,
    'max-depth': [1, 5],
    'max-len': [1, 120],
    'max-nested-callbacks': [1, 5],
    'max-params': [1, 4],
    'max-statements-per-line': 1,
    'new-cap': [1, { capIsNew: false }],
    'new-parens': 1,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'no-array-constructor': 1,
    'no-bitwise': 1,
    'no-continue': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-negated-condition': 1,
    'no-new-object': 1,
    'no-spaced-func': 1,
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'object-curly-spacing': [1, 'always'],
    'one-var-declaration-per-line': [1, 'always'],
    'quote-props': [1, 'as-needed'],
    'quotes': [1, 'single'],
    'semi': [1, 'never'],
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,

    /* ES6 */
    'arrow-spacing': 1,
    'constructor-super': 1,
    'no-class-assign': 1,
    'no-confusing-arrow': 0,
    'no-const-assign': 1,
    'no-dupe-class-members': 1,
    'no-duplicate-imports': 1,
    'no-new-symbol': 1,
    'no-this-before-super': 1,
    'no-useless-constructor': 1,
    'no-var': 1,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 1,
    'prefer-rest-params': 0,
    'prefer-spread': 0
  }
}
