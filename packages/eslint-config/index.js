import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            ecmaVersion: 'latest',
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],
        },
    },
]