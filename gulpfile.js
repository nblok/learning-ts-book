/* Gulp file */
var gulp = require('gulp'),
    tslint = require('gulp-tslint'),
    ts = require('gulp-typescript');

var tsProject = ts.createProject({
        removeComments: true,
        noImplicitAny: true,
        target: 'ES3',
        module: 'commonjs',
        declarationFiles: false
    }),
    tsSource = './src/ts/**/**.ts',
    tsTest = './test/**/*.test.ts';

gulp.task('lint', function() {
    return gulp.src([
        tsSource, tsTest
    ]).pipe(tslint())
      .pipe(tslint.report('verbose'));
});

gulp.task('tsc', function() {
    return gulp.src(tsSource)
               .pipe(ts(tsProject))
               .js.pipe(gulp.dest('./build/src/js'));
});

gulp.task('tsc-test', function() {
    return gulp.src(tsTest)
               .pipe(ts(tsProject))
               .js.pipe(gulp.dest('./build/test/js'));
});

gulp.task('default', ['lint', 'tsc', 'tsc-test']);
