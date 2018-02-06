const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('copy:fonts', () =>
  gulp
  .src(['node_modules/font-awesome/fonts/*'])
  .pipe(gulp.dest('dist/fonts'))
);

gulp.task('copy:carouselFonts', () =>
  gulp
  .src(['node_modules/angular-ui-carousel/dist/fonts/*'])
  .pipe(gulp.dest('dist/css/fonts'))
);

gulp.task('copy:html', () =>
  gulp
  .src('client/**/*.html')
  .pipe(gulp.dest('dist'))
);

gulp.task('copy:images', () =>
  gulp
  .src('client/app/images/*')
  .pipe(gulp.dest('dist/images'))
);

gulp.task('build:js', () =>
  gulp
  .src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'client/**/*.module.js',
    'client/**/*.js'
  ])
  .pipe($.concat('bundle.min.js'))
  // .pipe($.uglify().on('error', (err) => {
  //   console.log(`Error: ${err}`);
  // }))
  .pipe(gulp.dest('dist/js'))
);

gulp.task('build:css', () =>
  gulp
  .src([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'client/styles.css'
  ])
  .pipe($.concat('bundle.min.css'))
  .pipe($.cleanCss())
  .pipe(gulp.dest('./dist/css'))
);

gulp.task('build:cssportfolio', () =>
  gulp
  .src([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'client/stylesportfolio.css'
  ])
  .pipe($.concat('bundleportfolio.min.css'))
  .pipe($.cleanCss())
  .pipe(gulp.dest('./dist/css'))
);

gulp.task('watch', () => {
  gulp.watch('./client/styles.css', ['build:css']);
  gulp.watch('./client/stylesportfolio.css', ['build:cssportfolio']);
  gulp.watch('./client/**/*.js', ['build:js']);
  gulp.watch('./client/**/*.html', ['copy:html']);
});

gulp.task('serve', () =>
  $.nodemon({
    script: 'index.js',
    env: {
      NODE_ENV: 'development'
    }
  })
);

gulp.task('build', ['copy:fonts', 'copy:images', 'copy:html', 'build:js', 'build:css', 'build:cssportfolio'])

gulp.task('default', ['build', 'watch', 'serve']);
