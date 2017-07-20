
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    // entry: './sourse/index.js',
    entry: [
        path.join(__dirname, './sourse/index.js')
    ],
    // output: {
    //     path: path.resolve(__dirname, "build"),
    //     filename: '[name]-build.js'
    // },
    output: {
        path: __dirname + "/build",
        filename: '[name]-build.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:[{
                        loader:'style!css?mportLoaders=1!postcss',
                        options:{
                            modules:true,
                            localIdentName:'[name]__[local]-[hash:base64:5]',
                        }
                    }],
        		    publicPath:__dirname + "/build/"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use:[{
                        loader:'style!css!postcss!less',
                        options:{
                            modules:true,
                            localIdentName:'[name]__[local]-[hash:base64:5]',
                        }
                    }],
        		    publicPath:__dirname + "/build/"
                })
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                loaders: [
                    'url-loader?limit=20000&name=images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file?name=./sourse/fonts/[name].[ext]',
            },
            {
    　　　　　　test: /\.html$/,
    　　　　　　loader: 'html-withimg-loader'
    　　　　}
        ],
        rules: [
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                loaders: [
                    'url-loader',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.','.jsx','.js']
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles.css',allChunks: true }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'

        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require('autoprefixer')({ browsers: ['last 5 versions'] })]
            }
        }),
    ]
};
