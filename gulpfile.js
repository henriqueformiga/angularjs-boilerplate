// import the base gulp node module
const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const scripts = require('./scripts.json');
const styles = require('./styles.json');

let devMode = false;

gulp.task('css', function () {
  gulp
    .src(styles)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task('js', function () {
  gulp
    .src(scripts)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task('html', function () {
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task('build', function () {
  gulp.parallel('css', 'js', 'html')();
});

gulp.task('browser-sync', function () {
  browserSync.init({
    open: false,
    port: 3000,
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('dev', function () {
  gulp.parallel('build', 'browser-sync')();
  gulp.watch(['./src/assets/css/**/*.css'], gulp.series('css'));
  gulp.watch('./src/app/**/*.js', gulp.series('js'));
  gulp.watch(['./src/**/*.html'], gulp.series('html'));
  return;
});
