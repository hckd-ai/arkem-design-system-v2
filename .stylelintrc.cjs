module.exports = {
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "scale-unlimited/declaration-strict-value": [
      ["font-family", "font-size", "line-height", "letter-spacing"],
      { ignoreVariables: false, ignoreFunctions: false },
    ],
  },
};

