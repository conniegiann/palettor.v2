var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify');
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename');


gulp.task('scripts', function() {

  // Broswerify setup.
  var b = browserify({
    entries: './scripts/app.js',
    debug: false,
    transform: [reactify]
  });

  // A pretty red error string.
  var e = gutil.colors.red('Browserify or JSX transform error...');

  // Bundle with browserify, outputs a stream.
  b.bundle()

    // Grab errors in the stream.
    .on('error', function(err) {

      // Log out error string `e`.
      gutil.log('Woops! ' + e);

      // Log the error message, output in grey.
      gutil.log(gutil.colors.grey(err.message));

    // Now we can pipe the stream into out other transformations.
    })

    // First deal with the streaming output of browserify,
    // as gulp plugins expect a vinyl file, not a the
    // conventional text stream that browserify outputs.
    .pipe(source('app.js'))

    // Convert a streaming vinyl file to a buffered one.
    .pipe(buffer())

    // Pipe the buffered vinyl to uglify.
    // .pipe(uglify())

    // Rename the minified file.
    .pipe(rename('app.min.js'))

    // Ouput the vinyl file (make a real file)
    .pipe(gulp.dest('./build/'))
});

gulp.task('build', function() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./build/'));

  gulp.src('./styles/app.css')
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', function() {

  // Let's add some color.
  var ok = gutil.colors.yellow('gulpfile.js up and running...')

  // Log to the console with a timestamp.
  gutil.log(ok);
});