import config from './config'
import gulp   from 'gulp'
import del    from 'del'

gulp.task('clean', () => {
    return del(config.publicAssets);
})