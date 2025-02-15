import globals from "globals";
import jsPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').ESLint.FlatConfig[]} */
export default [
  {
    ignores: ["eslint.config.js", "loader.mjs", "node_modules", "dist"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Target JavaScript and TypeScript files
    languageOptions: {
      globals: globals.browser,
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: "latest", // Modern JavaScript
        sourceType: "module",  // Use ES modules
        project: "./tsconfig.json", // TypeScript config file
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // Enable TypeScript plugin
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-unused-vars": "off", // Disable core unused vars rule
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // TypeScript unused vars rule
      "@typescript-eslint/explicit-function-return-type": "off", // Disable return type enforcement
      "@typescript-eslint/no-explicit-any": "warn", // Warn on using `any`
    },
  },
  {
    files: ["**/*.js"], // Only JavaScript files
    plugins: {
      "eslint-plugin": jsPlugin, // JavaScript plugin
    },
    rules: {
      ...jsPlugin.configs.recommended.rules, // Apply recommended JavaScript rules
    },
  },
  {
    files: ["**/*.ts"], // Only TypeScript files
    plugins: {
      "@typescript-eslint": tsPlugin, // TypeScript plugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Apply recommended TypeScript rules
    },
  },
];


