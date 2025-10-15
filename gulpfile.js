const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Tarefa para compilar SASS para CSS
function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa para minificar JavaScript
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Tarefa para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa para observar mudanças nos arquivos
function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
}

// Tarefas exportadas
exports.default = gulp.parallel(styles, scripts, images);
exports.watch = gulp.series(exports.default, watchFiles);