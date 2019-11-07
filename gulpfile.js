
/*
* Dependencias
*/
var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
babel = require('gulp-babel')
sourcemaps = require('gulp-sourcemaps')
;

/*
* Configuración de la tarea 'demo'
*/
gulp.task('demo', function () {
	gulp.src('js/source/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(concat('todo.js'))
		.pipe(sourcemaps.write('.'))
		//.pipe(uglify())
		.pipe(gulp.dest('js/build/'));
});
