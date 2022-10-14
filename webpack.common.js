const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const desc =
  'Инкрементная игра, в которой вы почувствуете себя художником-фальсификатором! Копируйте чужие работы и скупайте оригиналы на пути к становлению главным игроком арт-рынка.'

const keywords =
  'FAC, fake, art, clicker, кликер, инкрементная игра, симулятор художника'

module.exports = {
  entry: {
    index: './src/index.js',
    game: './src/game.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  stats: { children: true },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/landing/share.jpg',
          to: './images/share.jpg'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index'],
      // prettier-ignore
      meta: {
        description: { name: 'description', content: desc },
        keyword: { name: 'keywords', content: keywords },
        'og:title': { property: 'og:title', content: 'Fake Art Clicker' },
        'og:description': { property: 'og:description', content: desc },
        'og:type': { property: 'og:type', content: 'website' },
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/game.html',
      filename: './game.html',
      chunks: ['game'],
      // prettier-ignore
      meta: {
        'description': { name: 'description', content: desc },
        'keyword': { name: 'keywords', content: keywords },
        'og:title': { property: 'og:title', content: 'Fake Art Clicker' },
        'og:description': { property: 'og:description', content: desc },
        'og:type': { property: 'og:type', content: 'website' },
      }
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
