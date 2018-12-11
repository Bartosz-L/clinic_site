const gulp = require('gulp');
const gulpSass = require('gulp-sass');

gulp.task('buildcss', () => {
  return gulp.src('./source/style.scss')
      .pipe(gulpSass())
      .pipe(gulp.dest('./build/'));
});

gulp.task('watch', () => {
  gulp.watch('./source/**/*.scss', ['buildcss']);
});