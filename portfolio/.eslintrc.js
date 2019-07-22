module.exports = {
    root: true,
    extends: ["standard"],
    plugins: ["node", "promise", "vue"],
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module"
    },
    rules: {
        "no-console": "off"
    }
}