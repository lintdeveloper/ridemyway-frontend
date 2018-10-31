const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.s?css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'public/index.html',
    filename: 'index.html',
    inject: 'body',
  }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      images: path.resolve(__dirname, 'public/assets/img'),
      styles: path.resolve(__dirname, 'public/assets/css'),
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    port: 3500,
    historyApiFallback: true,
  },
};
