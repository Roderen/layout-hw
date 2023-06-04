const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function images() {
  return gulp.src('src/public/images/**/*')
      .pipe(imagemin(
          [
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
          ]
      ))
      .pipe(gulp.dest('dist/public/images'))
}