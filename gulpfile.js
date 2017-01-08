'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function () {
  return nodemon({
    script: 'api',
    ext: 'js',
  }).on('start', function () {
    console.log('**starting**');
  }).on('restart', function () {
    console.log('**restarting**');
  })
});

gulp.task('default', function () {
  gulp.start('serve');
});
