const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',

    },
    devServer: {
         // 静态文件目录
         static: {
            directory: path.join(__dirname, "../public")
          },
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,

    },
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,//不需要去转译"node\_modules"这里面的文件。
              },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg)$/,
                type: 'asset/resource', 
              }, 
        ]
    },
    resolve: {
        extensions: ['*', '.js','.jsx'],
        mainFiles:  ["index"]
      },
    plugins: [new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
            {title: "Chat App",
            filename: 'index.html',
            template: 'src/index.html'
      
            }
          )
    ]

}