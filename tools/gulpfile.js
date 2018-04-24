"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const inject = require('gulp-inject-string');

// example
gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/FINALNAME.png')
     .pipe(imagemin({ optimizationLevel: 5 }))
     .pipe(gulp.dest('../build/img'))
});

// example
gulp.task("concatStyle", () =>
{
   gulp.src("../src/scss/style.scss")
      .pipe(concat("FILENAME.scss"))
      .pipe(gulp.dest("../src/scss"));
});

// example
gulp.task("jscompress", () =>
{
   gulp.src('../src/js/FILENAME.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('FILENAME.min.js'))
      .pipe(gulp.dest('../build/js'));
});

// example
gulp.task("compileSass", () =>
{
   gulp.src("../src/scss/FILENAME.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('deter.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
