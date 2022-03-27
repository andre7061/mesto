const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: './src/pages/index.js'
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },

    mode: 'development',

    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 9000,
        open: true
    },

    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}