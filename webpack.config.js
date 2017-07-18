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
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new HtmlWebpackPlugin({
      title: 'Output Managementa'
    })
  ],
  // devServer: {
  //   hot: true, // 告诉 dev-server 我们在使用 HMR
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   historyApiFallback: true,
  //   publicPath: '/',
  //   port:9100
  // },
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