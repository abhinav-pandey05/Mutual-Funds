var gulp = require('gulp');

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
});

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('src/*.html', browserSync.reload); 
    gulp.watch('src/js/**/*.js', browserSync.reload); 
    gulp.watch('src/components/**/*.handlebars', browserSync.reload); 
});

var useref = require('gulp-useref');
gulp.task('useref', function() {
    return gulp.src('src/*.html')
      .pipe(useref())
      .pipe(gulp.dest('dist'))
  });

  var uglify = require('gulp-uglify');
  var gulpIf = require('gulp-if');
  
  gulp.task('useref', function(){
    return gulp.src('src/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist'))
}); 

var cssnano = require('gulp-cssnano');
gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

var imagemin = require('gulp-imagemin');
gulp.task('images', function(){
    return gulp.src('src/assets/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

var cache = require('gulp-cache');
gulp.task('images', function(){
    return gulp.src('src/assets/**/*.+(png|jpg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

var del = require('del');
gulp.task('clean:dist', function() {
    return del.sync('dist');
})

var runSequence = require('run-sequence');
gulp.task('task-name', function(callback) {
    runSequence('task-one', 'task-two', 'task-three', callback);
});