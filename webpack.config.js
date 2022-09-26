import {CleanWebpackPlugin, CopyWebpackPlugin, MiniCssExtractPlugin} from './config/plugins.js';
import settings from './config/settings.js';
import paths from './paths.js';

import {htmlGenerator} from './config/helpers.js';

export default {
  mode: settings.mode,
  context: paths.pathSrc,
  target: settings.isDev ? 'web' : 'browserslist',
  devtool: settings.isDev ? 'source-map' : false,
  entry: {
    main: './index.js',
  },
  output: {
    filename: settings.jsOutput,
    path: paths.pathDist,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.pathSrc,
      '@img': `${paths.pathSrc}/img`,
      '@scss': `${paths.pathSrc}/scss`,
      '@js': `${paths.pathSrc}/js`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: settings.cssOutput}),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.pathSrc}/img/favicons/`,
          to: `${paths.pathDist}/`,
          noErrorOnMissing: true,
        },
        {
          from: `${paths.pathSrc}/uploads/`,
          to: `${paths.pathDist}/uploads`,
          noErrorOnMissing: true,
        },
      ],
    }),
    ...htmlGenerator,
  ],
};