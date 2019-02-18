var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/sass/*.scss", ['sass']);
    gulp.watch("*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
