import {fileName} from './helpers.js';
import {isProd, isDev, mode} from './env.js';

const cssOutput = `css/${fileName('css')}`;
const jsOutput = `js/${fileName('js')}`;

export default {
  isProd,
  isDev,
  mode,
  imagemin: {
    verbose: true,
    progressive: true,
  },
  cssOutput,
  jsOutput,
};

