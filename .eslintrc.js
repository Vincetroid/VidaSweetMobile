module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^react$',
                '^react-native$',
                '^[a-z]',
                '^@react',
                '^@',
                '^@/redux-content',
                '^@/components',
                '^@/hooks',
                '^@/utils',
                '^@/assets',
                '^@/translations',
                '^@global-styles',
                '^@/theme',
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
                '^\\u0000',
              ],
            ],
          },
        ],
      },
    },
  ],
  ignorePatterns: ['src/Api/*'],
};
