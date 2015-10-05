/* Gulp file */
var gulp = require('gulp'),
    tslint = require('gulp-tslint');

gulp.task('lint', function() {
    return gulp.src([
        './src/ts/**/**.ts', './test/**/*.test.ts'
    ]).pipe(tslint())
      .pipe(tslint.report('verbose'));
});

gulp.task('default', ['lint']);
