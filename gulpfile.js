const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

function compileSass() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function minifyJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function minifyHTML() {
    return gulp.src('src/html/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src/scss/**/*.scss', compileSass);
    gulp.watch('src/js/**/*.js', minifyJS);
    gulp.watch('src/html/**/*.html', minifyHTML);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
}

exports.sass = compileSass;
exports.js = minifyJS;
exports.html = minifyHTML;
exports.serve = serve;

exports.default = gulp.series(compileSass, minifyJS, minifyHTML, serve);