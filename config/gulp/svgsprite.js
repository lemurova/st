import {gulp, svgSprite} from '../plugins.js';
import paths from '../../paths.js';

const config = {
  mode: {
    symbol: {
      sprite: '../icons.svg',
    },
  },
  shape: {
    id: {
      separator: '',
      generator: 'svg-',
    },
    transform: [
      {
        svgo: {
          plugins: [
            {removeXMLNS: true},
            {convertPathData: false},
            {removeViewBox: false},
          ],
        },
      },
    ],
  },
  svg: {
    rootAttributes: {
      style: 'display: none;',
      'aria-hidden': true,
    },
    xmlDeclaration: false,
  },
};

export default () => {
  return gulp.src(`${paths.mask.sprites}`, {})
  .pipe(svgSprite(config))
  .pipe(gulp.dest(`${paths.src.svg}`));
};