import eslintConfig from '@art-design-systems/eslint-config';

export default [
    ...eslintConfig,
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    },
];