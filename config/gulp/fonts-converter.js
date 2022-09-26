import paths from '../../paths.js';
import gulp from 'gulp';

import {
  ttf2woff,
  ttf2woff2,
} from '../plugins.js';

export default () => {
  gulp.src(paths.mask.fonts)
  .pipe(ttf2woff())
  .pipe(gulp.dest(paths.src.fonts));
  return gulp.src(paths.mask.fonts)
  .pipe(ttf2woff2())
  .pipe(gulp.dest(paths.src.fonts));
};