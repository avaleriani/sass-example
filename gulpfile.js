'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('imagemin');
//var browserify = require('browserify');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('images', function () {
    //  return gulp.src('./images/**')
    //    .pipe(imagemin())
    //  .pipe(gulp.dest('./images/build'));
});

gulp.task('browserify', function () {
   // return browserify('./js/app.js')
 //       .bundle()
  //     .pipe(source('bundle.js'))
    //    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', ['browserify', 'sass', 'images']);
gulp.task('default', ['build', 'watch']);