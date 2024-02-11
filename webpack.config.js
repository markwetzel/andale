const path = require("path");

module.exports = {
  entry: {
    background: "./src/background.ts",
    content: "./src/content.ts", // Assuming you have a content.ts that needs to be compiled
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  "devtool": "source-map",
  output: {
    filename: '[name].js', // This will output background.js and content.js
    path: path.resolve(__dirname, 'dist'),
  },
};
