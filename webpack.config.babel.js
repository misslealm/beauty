import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import SyncMDDataPlugin from './Plugins/SyncMDDataPlugin/index'
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app:'./src/index.js'
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
      title: 'lealm的博客'
    }),
    new SyncMDDataPlugin()
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
          'css-loader',
          'less-loader'
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
      },
      {
        test: /\.md$/,
        loader: path.join(__dirname,'loaders',"markdown-loader")
      }
      
    ]
  },
  resolve:{
    alias:{
      common:path.join(__dirname,'src/common'),
      article:path.join(__dirname,'article'),
      components:path.join(__dirname,'src/components'),
      containers:path.join(__dirname,'src/containers'),
    }
  }
}
