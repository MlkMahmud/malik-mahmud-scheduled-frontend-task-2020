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
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/images',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      minify: true,
      favicon: path.join(__dirname, 'public', 'images', 'favicon.ico'),
    }),
  ],
};
