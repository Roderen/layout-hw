const gulp = require('gulp');
const webp = require('gulp-webp');

module.exports = function webpConvert() {
  return gulp.src('src/public/images/**/*')
      .pipe(webp())
      .pipe(gulp.dest('src/public/images/'))
}