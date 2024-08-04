const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
// for future reference, the above gul-purgecss changed the index.css file size 
// from 2572 lines to 385 WOW

// function buildStyles() {
//     return src('sabitica/**/*.scss')
//         .pipe(sass())
//         .pipe(purgecss({content: ['*.html']}))
//         .pipe(dest('css'))
// }



// function watchTask() {
//     watch(['sabitica/**/*.scss', '*.html'], buildStyles)
// }

// I've created a folder called sass - if you were to extend Sabitica and reuse it,
// you would simply need to copy and paste the sass in 
// and then change 'sabitica' in the file to 'sass'

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html'], buildStyles)
}

        

exports.default = series(buildStyles, watchTask);