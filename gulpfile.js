/*eslint-env node */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
gulp.task("default", function(){
    gulp.watch("app/sass/**/*.scss", ["styles"]);

    browserSync.init({
        server: './'
    });
});

gulp.task("styles", function(){
    return gulp.src("app/sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
});