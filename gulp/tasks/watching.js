const gulp = require('gulp');
const sync = require('browser-sync');
const styles = require("./sass");
const scripts = require("./scripts");


module.exports = function watching() {
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch(['src/assets/js/**/*.js', '!src/assets/js/main.min.js'], scripts)
  gulp.watch('src/**/*.html').on('change', sync.reload);
}