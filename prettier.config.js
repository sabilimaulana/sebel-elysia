/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "",
    "^(elysia/(.*)$)|^(elysia$)",
    "^@elysiajs/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "",
    "^[.]", // relative imports
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}
