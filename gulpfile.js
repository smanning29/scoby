<<<<<<< HEAD
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
      var plugins = [
        autoprefixer,
        tailwindcss
    ];
    return gulp.src('./src/*.css')
      .pipe(postcss(plugins))
      .pipe(browserSync.stream())
      .pipe(gulp.dest('./dest/css'));
  });
=======
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
function style() {
return gulp.src('./scss/**/*.scss')
//default style indented based on nesting
.pipe(sass({outputStyle: 'nested'}))
//indented but not based on nesting
// .pipe(sass({outputStyle: 'expanded'}))
//rules are one line
// .pipe(sass({outputStyle: 'compact'}))
//production css (minified) one line no white space
// .pipe(sass({outputStyle: 'compressed'}))
.pipe(browserSync.stream())
.pipe(gulp.dest('./css'));
}
>>>>>>> d3ca32e868e30d9d0f738e8a8e2558968f25f836

  function watch() { browserSync.init({
    server: {
    baseDir: './dest' }
    });

    gulp.watch('./dest/*.html').on('change', browserSync.reload);
    }

    exports.watch = watch;