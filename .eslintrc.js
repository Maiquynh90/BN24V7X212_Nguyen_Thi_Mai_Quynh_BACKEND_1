// ✅ File: .eslintrc.js
module.exports = {
  env: {
    node: true,        // môi trường Node.js
    commonjs: true,    // hỗ trợ require/module.exports
    es2021: true,      // dùng cú pháp ES2021
  },
  extends: ["eslint:recommended", "prettier"], // dùng rule mặc định + tích hợp Prettier
  parserOptions: {
    ecmaVersion: 2021, // cú pháp ECMAScript mới
  },
  ignorePatterns: ["node_modules/", "dist/"],  // bỏ qua các thư mục build
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
    "no-console": "off",
    eqeqeq: "warn",
    semi: ["error", "always"],
    quotes: ["warn", "double"],
    indent: ["warn", 2],
    "comma-dangle": ["warn", "only-multiline"],
  },
};
