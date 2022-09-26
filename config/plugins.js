import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ttf2woff2 from 'gulp-ttf2woff2';
import imagemin from 'gulp-imagemin';
import ttf2woff from 'gulp-ttf2woff';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
// import webp from 'gulp-webp';
import gulp from 'gulp';

export {
  MiniCssExtractPlugin,
  CleanWebpackPlugin,
  HtmlWebpackPlugin,
  CopyWebpackPlugin,
  ttf2woff2,
  ttf2woff,
  imagemin,
  plumber,
  notify,
  newer,
  gulp,
};
