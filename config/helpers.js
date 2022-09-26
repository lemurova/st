import {HtmlWebpackPlugin} from './plugins.js';
import {isDev, isProd, mode} from './env.js';
import paths from '../paths.js';
import path from 'path';
import fs from 'fs';


const htmlFiles = fs.readdirSync(paths.pathSrc)
.filter((file) => path.extname(file).toLowerCase() === '.html');

/**
 * @description Generates a file name depending on the development mod
 * @param ext {String} - file extension [js|css]
 * @returns {string} - file name
 */
export const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;


export const htmlGenerator = htmlFiles.map((template) => new HtmlWebpackPlugin({
  filename: template,
  template: path.resolve(paths.pathSrc, template),
}));


/**
 * @description Removes duplicate values from an array, leaving only unique values
 * @param someArray {Array} - Array of values
 * @returns {any[]} - Unique values
 */
export const getUniqueItems = (someArray) => [...new Set(someArray)];

