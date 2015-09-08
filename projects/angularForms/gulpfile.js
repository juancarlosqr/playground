// include gulp & plug-ins
var gulp = require('gulp');
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

// directories
var srcHtml = './src/app/html/**/*.html';
var srcStyles = './src/app/css/**/*.css';
var srcScripts = './src/app/js/**/*.js';
var destBase = './src/dist/';

// minify new or changed HTML pages
gulp.task('html', function () {
  var destHtml = destBase + 'html';
  gulp.src([srcHtml])
    .pipe(changed(destHtml))
    .pipe(minifyHTML())
    .pipe(gulp.dest(destHtml));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function () {
  gulp.src([srcStyles])
    .pipe(concat('main.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(destBase + 'css'));
});

// JS hint task
gulp.task('jshint', function () {
  gulp.src([srcScripts])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function () {
  gulp.src([srcScripts])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destBase + 'js'));
});

// Webserver
gulp.task('server', function() {
  gulp.src('./src')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});

// Default gulp task
gulp.task('default', ['html', 'styles', 'jshint', 'scripts', 'server'], function () {
  // watch for HTML changes
  gulp.watch(srcHtml, ['html']);
  // watch for CSS changes
  gulp.watch(srcStyles, ['styles']);
  // watch for JS changes
  gulp.watch(srcScripts, ['jshint', 'scripts']);
});
