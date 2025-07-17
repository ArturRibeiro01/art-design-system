import eslintConfig from '@art-design-system/eslint-config';

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