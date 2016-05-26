import config        from './config'
import gulp          from 'gulp'
import webpack       from 'gulp-webpack'
import webpackConfig from './webpack.config.js'
import rev           from 'gulp-rev'
// import uglify        from 'gulp-uglify'

gulp.task('webpack', function() {
    return gulp.src(config.javascript.src)
        .pipe(webpack(webpackConfig))
        .pipe(rev())
        .pipe(gulp.dest(webpackConfig.output.publicPath))
        .pipe(rev.manifest(config.rev.dest, config.rev.opts))
        .pipe(gulp.dest(config.publicAssets));
});