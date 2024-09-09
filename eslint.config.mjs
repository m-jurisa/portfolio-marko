import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: true,
                babelOptions: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
        },
        rules: {
             "jsx-a11y/anchor-is-valid": [
                    "warn",
                  {
              "components": ["Link"],
              "specialLink": ["hrefLeft", "hrefRight"],
              "aspects": ["noHref", "invalidHref", "preferButton"]
                  }
           ],
            ...pluginReact.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope for JSX
            'array-element-newline': ['error', 'consistent'],
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-indent': ['error', 4],  
            'react/jsx-wrap-multilines': 'off',
            'no-multi-spaces': 'error',
            'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect the version of React to use
            },
        },
    },
];
