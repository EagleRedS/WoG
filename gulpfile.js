var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
 
gulp.task('default', function () {
  gulp.src('./assets/**/*.css')
    .pipe(concatCSS('style.css'))
    .pipe(gulp.dest('./css'));
});