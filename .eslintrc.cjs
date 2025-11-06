module.exports = {
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "JSXAttribute[name.name='style'] Property[key.name='fontFamily']",
        message: "Use CSS variables or semantic tokens for font-family instead of inline styles.",
      },
    ],
  },
};

