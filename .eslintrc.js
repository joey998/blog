module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended"],
  plugins: ["@joey998/tencent"],
  rules: {
    // 改规则与prettier冲突，要关闭prettier
    "@joey998/tencent/equidistance": [
      "error",
      {
        oneSpace: true,
        astTypeList: ["ObjectExpression:exit", "TSInterfaceDeclaration:exit"],
      },
    ],
  },
};