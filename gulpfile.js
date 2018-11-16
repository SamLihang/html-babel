const gulp = require('gulp');
const babel = require('gulp-babel')
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin');//html压缩组件
const cheerio = require('gulp-cheerio');
const domSrc = require('gulp-dom-src')
// gulp.task('default', function() {
//   return gulp
//     .src('*.html')
//     .pipe(cheerio(function($, file) {
//       $('script').each(function () {
//         return $(this)
//         .pipe(babel({
//                 presets: ['@babel/env']
//               }))
//       })
//     }))
//     .pipe(gulp.dest('sss'))
// })


// gulp.task('default', function() {
//   return gulp.src(['.\\**\\*.js',  '!node_modules/**', '!gulpfile.js'])
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(gulp.dest('dist'))
// })

// gulp.task('default', function() {
//   var options = {
//     removeComments: true,//清除HTML注释
//     collapseWhitespace: false,//压缩HTML
//     collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//     removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//     removeScriptTypeAttributes: true,//删除<script>的type="text/"
//     removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//     minifyJS: true,//压缩页面JS
//     minifyCSS: true//压缩页面CSS
//   };
//   gulp.src('*.html')
//   // .pipe(gulpRemoveHtml())//清除特定标签
//   // .pipe(removeEmptyLines({removeComments: true}))//清除空白行
//   .pipe(htmlmin(options))
//   .pipe(gulp.dest('html'));
// })

// gulp.task('default', function() {
//   return gulp.src('*.html')
//     .pipe(useref())
//     .pipe(gulpif('*.js', uglify()))
//     .pipe(gulp.dest('adfadf'))
// })

gulp.task('default', function() {
  domSrc({file: 'bb.html', selector: 'script', attribute: 'src' })
    .pipe(uglify())
    .pipe(gulp.dest('lala'))
})