const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss?$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src"),
    exclude: path.resolve(__dirname, "../node_modules"),
  });

  config.resolve.extensions.push(".scss");

  return config;
};
