"use strict";

// Load plugins
const fs = require("fs");
const autoprefixerModule = require("gulp-autoprefixer");
const autoprefixer = autoprefixerModule.default || autoprefixerModule;
const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

// Clean vendor
function clean() {
  fs.rmSync("./vendor/bootstrap", { recursive: true, force: true });
  fs.rmSync("./vendor/fontawesome-free", { recursive: true, force: true });
  return Promise.resolve();
}

// Bring third party dependencies from node_modules into vendor directory
function copyBootstrap() {
  return gulp.src("./node_modules/bootstrap/dist/**/*").pipe(gulp.dest("./vendor/bootstrap"));
}

function copyFontAwesomeCSS() {
  return gulp.src("./node_modules/@fortawesome/fontawesome-free/css/**/*").pipe(gulp.dest("./vendor/fontawesome-free/css"));
}

function copyFontAwesomeWebfonts() {
  return gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/**/*").pipe(gulp.dest("./vendor/fontawesome-free/webfonts"));
}

// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest("./css"))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"));
}

// JS task
function js() {
  return gulp
    .src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'));
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(["./js/**/*", "!./js/**/*.min.js"], js);
}

// Define complex tasks
const modules = gulp.parallel(copyBootstrap, copyFontAwesomeCSS, copyFontAwesomeWebfonts);
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor, gulp.parallel(css, js));
const watch = gulp.series(build, watchFiles);

// Export tasks
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
