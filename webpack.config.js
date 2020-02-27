const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      minify: true,
    }),
  ],
};
