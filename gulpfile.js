const gulp = require('gulp');

const webpConvert = require('./gulp/tasks/webp');

const cleanDistFolder = require('./gulp/tasks/clean');
const build = require('./gulp/tasks/build');
const images = require('./gulp/tasks/images');

const browserSync = require('./gulp/tasks/browser-sync');
const styles = require('./gulp/tasks/sass');
const scripts = require('./gulp/tasks/scripts');
const watching = require('./gulp/tasks/watching');

exports.dev = gulp.parallel(
    styles,
    scripts,
    browserSync,
    watching,
)

exports.build = gulp.series(
    cleanDistFolder,
    build,
    images,
);

exports.webp = webpConvert;