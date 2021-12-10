const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));





/*---------------SASS-----------------------*/
function buildStyles(sass) {
    return gulp.src('template/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style.css'));
};







/* ------------Pug___________________*/
exports.views = (pugBuild) => {
    return src('template/index.pug')
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(dest('.build'));
};