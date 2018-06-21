var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("default", function(){
    console.log("Hellooooo Udacity");
});

gulp.task("styles", function(){
    return gulp.src("app/sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});