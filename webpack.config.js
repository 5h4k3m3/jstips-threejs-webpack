module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader",
      },
      {
        test: /\.(glsl|.vert|.frag)$/,
        use: "raw-loader",
      },
    ],
  },
};
