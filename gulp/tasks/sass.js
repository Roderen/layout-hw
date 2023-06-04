const gulp = require('gulp');
const sync = require('browser-sync');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const sass = gulpSass(dartSass);
module.exports = function styles() {
  return gulp.src('src/scss/style.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      }))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('src/assets/css/'))
      .pipe(sync.reload({
        stream: true
      }));
}