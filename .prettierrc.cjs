module.exports = {
  singleQuote: true,
  arrowParens: "always",
  tabWidth: 2,
  printWidth: 100,
  jsxSingleQuote: true,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
