const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
   module: {
    rules: [
      //babel-loader
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },
      //html-loader
      { 
      	test: /\.html$/, 
      	use: [
      	  {
      	  	loader: 'html-loader',
      	    options: { minimize: true }
      	  }

      	]
      },
      //css-loader
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist/']),
    //html-webpack-plugin instantiation
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    port: 12000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'
}

module.exports = config;