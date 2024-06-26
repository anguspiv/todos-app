/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ['!**/.server', '!**/.client'],

  // Base config
  extends: ['eslint:recommended', 'airbnb', 'prettier'],

  rules: {
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'airbnb-typescript',
      ],
    },

    // Node
    {
      files: [
        '.eslintrc.cjs',
        'vite.config.ts',
        'vitest.config.ts',
        'vite.base.config.ts',
        'test/**/*.{t,j}s{,x}',
        'codegen.ts',
      ],
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },

    // Tests
    {
      files: ['**/*.test.{t,j}s{,x}', '**/test/**/*.{t,j}s{,x}'],
      env: {
        jest: true,
      },
      plugins: ['vitest'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.stories.{t,j}s{,x}', '**/stories/**/*.{t,j}s{,x}'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
};
