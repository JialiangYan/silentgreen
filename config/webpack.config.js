const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: false,
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
}
