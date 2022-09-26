import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathDist = 'dist';
const pathSrc = 'src';
const pathFiles = 'files';

export default {
  src: {
    fonts: `${pathSrc}/fonts/`,
    images: `${pathSrc}/img/`,
    svg: `${pathSrc}/img/icons/svg`,
  },
  dist: {
    images: `${pathSrc}/img`,
    fonts: `${pathSrc}/fonts`,
  },
  mask: {
    fonts: `${pathFiles}/fonts/**/*.ttf`,
    images: `${pathFiles}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    sprites: `${pathFiles}/img/icons/svg/forsprite/*.svg`,
    svg: `${pathFiles}/img/icons/svg/*.svg`,
  },
  pathDist: path.resolve(__dirname, `${pathDist}`),
  pathSrc: path.resolve(__dirname, `${pathSrc}`),
  pathFiles: path.resolve(__dirname, `${pathFiles}`),
};
