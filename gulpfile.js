import {gulp} from './config/plugins.js';
import fontsConverter from './config/gulp/fonts-converter.js';
import fontScssAutocomplete from './config/gulp/fonts-autocomplete.js';
import img from './config/gulp/img.js';

const fonts = gulp.series(fontsConverter, fontScssAutocomplete);
const images = gulp.series(img);

const script = gulp.parallel(fonts, images);
gulp.task('default', script);
