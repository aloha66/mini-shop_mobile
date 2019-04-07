module.exports = {
  plugins: {
    autoprefixer: {},
    // "postcss-pxtorem": {
    //   rootValue: 37.5,
    //   propList: ["*"],
    // },
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      landscapeWidth: 667,
    },
  },
};
