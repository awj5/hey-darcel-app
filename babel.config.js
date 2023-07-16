module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            utils: "./utils",
            context: "./context",
            underscore: "lodash",
          },
        },
      ],
    ],
  };
};
