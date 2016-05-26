import config    from './config'
import gulp      from 'gulp'
import sass      from 'gulp-sass'
import rename    from 'gulp-rename'
import rev       from 'gulp-rev'
import minifyCss from 'gulp-minify-css'
// import notify    from 'gulp-notify'

gulp.task('compile-sass', () => {
    return gulp.src(config.stylesheet.srcSass)
        .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
        .pipe(minifyCss())
        .pipe(rename( { suffix: '.bundle' }))
        .pipe(rev())
        .pipe(gulp.dest(config.stylesheet.dest))
        .pipe(rev.manifest(config.rev.dest, config.rev.opts))
        .pipe(gulp.dest(config.publicAssets));
});

gulp.task('compile-scss', () => {
    return gulp.src(config.stylesheet.srcScss)
        .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
        .pipe(minifyCss())
        .pipe(rename( { suffix: '.bundle' }))
        .pipe(rev())
        .pipe(gulp.dest(config.stylesheet.dest))
        .pipe(rev.manifest(config.rev.dest, config.rev.opts))
        .pipe(gulp.dest(config.publicAssets));
});