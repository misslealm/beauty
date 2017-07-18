import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

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
    new webpack.optimize.CommonsChunkPlugin('common'),
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
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}
