import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "dot-notation": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-return-await": "error",
      "no-throw-literal": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-use-before-define": ["error", { functions: false }],
      "camelcase": ["warn", { properties: "never" }],
      "consistent-return": "error",
      "default-case": "error",
      "prefer-const": "error",
      "object-shorthand": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-shadow": "error",
      "no-param-reassign": "error",
    },
  },
  eslintConfigPrettier,
]);
