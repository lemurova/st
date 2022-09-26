import {imagemin, newer, gulp} from '../plugins.js';
import paths from '../../paths.js';
import settings from '../settings.js';

export default () => {
  return gulp.src(paths.mask.images)
  .pipe(newer(paths.src.images))
  .pipe(imagemin(settings.imagemin))
  .pipe(gulp.dest(paths.dist.images));
}


