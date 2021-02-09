const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const pug = require('gulp-pug');

gulp.task('mincss', function() {
    return gulp.src("src/external/slick/*.css")
        .pipe(autoprefixer({
            // browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(cleanCSS())
        .pipe(gulp.dest("app/css/external"));
});
gulp.task('scss', function() {
    return gulp.src("src/styles/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            // browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(cleanCSS())
        .pipe(gulp.dest("app/css/styles"));
});
gulp.task('minjs', function() {
    return gulp.src("src/**/*.js")
        .pipe(rename({suffix: ".min"}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("app/js"));
});
gulp.task('minimg', async function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img'));
});
gulp.task('min', gulp.series ('mincss', 'minjs', 'minimg'));

gulp.task('html', function buildHTML() {
    return gulp.src('src/pages/**/*.pug')
        .pipe(pug({
        }))
        .pipe(gulp.dest('app/pages'));
});

gulp.task('all', gulp.series ('mincss', 'scss', 'minjs', 'minimg', 'html'));




gulp.task('mincss2', function() {
    return gulp.src("src/external/slick/*.css")
        .pipe(autoprefixer({
            // browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(cleanCSS())
        .pipe(gulp.dest("vks/styles"));
});
gulp.task('scss', function() {
    return gulp.src("src/styles/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            // browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(cleanCSS())
        .pipe(gulp.dest("vks/styles"));
});
gulp.task('minjs2', function() {
    return gulp.src(["src/scripts/*.js", "src/external/slick/*.js"])
        .pipe(rename({suffix: ".min"}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("vks/scripts"));
});
gulp.task('minimg2', async function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('vks/img'));
});
gulp.task('html2', function buildHTML() {
    return gulp.src('src/pages/includes/*.pug')
        .pipe(pug({
        }))
        .pipe(gulp.dest('vks'));
});

gulp.task('all2', gulp.series ('scss', 'mincss2', 'minjs2', 'minimg2', 'html2'));