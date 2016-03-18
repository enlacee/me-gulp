/*
* comprimir css
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('demo', function(){
	gulp.src('css/source/*.css')
	.pipe(cssmin())
	.pipe(concat('todo.min.css'))
	//.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('css/build/'))
});