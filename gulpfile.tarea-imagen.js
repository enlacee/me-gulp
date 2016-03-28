/*
* comprimir imagenes
*/
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('demo', function () {
    return gulp.src(['images/source/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('images/build/'));
});