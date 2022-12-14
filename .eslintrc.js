module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier",
  ],
  rules: {
    indent: 0,
    semi: [1, "always"],
    "@typescript-eslint/no-explicit-any": "off",
    "no-debugger": 2,
    "no-console": 2,
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-var-requires": 0,
    "consistent-return": 0,
    "no-else-return": 1,
    "space-unary-ops": 2,
    "react/prop-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-empty-interface": 0,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
};
