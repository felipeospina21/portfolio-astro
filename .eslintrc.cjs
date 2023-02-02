module.exports = {
  extends: [
    // ...
    "plugin:astro/recommended",
  ],
  // ...
  overrides: [
    {
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      //   "ecmaFeatures": {
      //     "jsx": true
      // },
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:react-hooks/recommended"
      ]
    },
    {
      files: ['.jsx', '.tsx'],
      extends: [
        'plugin:react/recommended'
      ],
    }
  ],
}