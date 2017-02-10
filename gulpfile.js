var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	del = require('del');
	minifyCss = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('app/assets/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/assets/dist'));
});
 
gulp.task('compress', function (cb) {
  return gulp.src('app/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/dist'));
});

gulp.task('default', ['minify-css', 'compress']);