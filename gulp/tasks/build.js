const gulp = require('gulp');

module.exports = function build() {
  return gulp.src([
    'src/assets/**/*',
    'src/public/**/*',
    'src/index.html',
    '!src/assets/js/main.js',
    '!src/scss/**'
  ], {base: 'src'})
      .pipe(gulp.dest('dist'))
}