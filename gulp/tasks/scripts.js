const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sync = require("browser-sync");

module.exports = function scripts() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'src/assets/js/main.js'
  ])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('src/assets/js/'))
      .pipe(sync.reload({
        stream: true
      }));
}
