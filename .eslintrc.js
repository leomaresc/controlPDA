export default [
    {
        rules: {
            semi: "error",
            "prefer-const": "error"
        },
        parserOptions: {
            parser: '@babel/eslint-parser',
            requireConfigFile: false, // <== ADD THIS
            ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
            sourceType: 'module' // Allows for the use of imports
          }
    }
];