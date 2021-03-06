const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const CompressionPlugin = require('compression-webpack-plugin')
const imageminGifsicle = require('imagemin-gifsicle')
const imageminPngquant = require('imagemin-pngquant')
const imageminSvgo = require('imagemin-svgo');
const imageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
    module: {
        rules: [
        {
            test: /\.(s[ac]ss|css)$/i,
            use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
            ],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(png|svg|jpg|gif|glb|hdr|zip|pdf|mp4|webp|mp3)$/,
            use: [
                {
                    loader: 'file-loader'
                },
                {
                    loader: 'img-loader',
                    options: {
                        plugins: [
                            imageminGifsicle({
                                interlaced: false
                            }),
                            imageminMozjpeg({
                                progressive: true,
                                arithmetic: false,
                                quality: 70
                            }),
                            imageminPngquant({
                                floyd: 0.5,
                                speed: 2,
                                strip: true,
                                quality: [0.3, 0.5]
                            }),
                            imageminSvgo({
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            })
                        ]
                    }
                }
            ]
        },
        {
            test: /\.(js|jsx|jsm)$/,
            exclude: /node_modules/,
            resolve: {
                extensions: ['.js', '.jsx', '.jsm']
            },
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                }
            ]
        }, 
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html',
            favicon: './src/assets/img/favicon.png'
        }),
        new CompressionPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'CNAME', to: '' },
                { from: 'src/.htaccess', to: '' },
                { from: 'src/.nojekyll', to: '' },
                { from: 'src/404.html', to: '' },
            ],
        }),
    ]
}