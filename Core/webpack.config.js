const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // your entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "GSquares.js",
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true, // required for 'module' libraryTarget
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production",
};
