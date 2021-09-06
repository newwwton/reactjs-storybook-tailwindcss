const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        require.resolve("tailwindcss"),
        require.resolve("autoprefixer"),
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.pug$/,
      use: [{ loader: "pug-plain-loader" }],
    });

    return config;
  },
};