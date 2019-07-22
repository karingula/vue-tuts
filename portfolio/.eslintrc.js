module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:vue/recommended"],
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
        ecmaVersion: 6
      },
      plugins: ["vue"],
      env: {
        node: true,
        browser: true,
        es6: true
      },
      rules: {
          "no-console": "off",
          "vue/max-attributes-per-line": "off",
      }
}