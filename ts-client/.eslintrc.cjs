module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'jest', 'security', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-console': 'error',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'jest/expect-expect': 'off',
    'security/detect-object-injection': 'off',
    'comma-dangle': ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
