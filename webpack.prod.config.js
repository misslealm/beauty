var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app:'./src/index.js',
    module:'./src/module.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/dist/"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin('common'),
    new HtmlWebpackPlugin({
      title: '开始啦',

    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '/',
    port:9100
  },
  module:{
  	rules:[
  		{
  			test:/\.css$/,
  			use:[
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
  			test:/\.(png|svg|jpg|gif|jpeg)$/,
  			use:[
  				'file-loader'
  			]
  		},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
  	]
  }
};