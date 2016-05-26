import gulp        from 'gulp'
import runSequence from 'run-sequence'

gulp.task('default', () => {
    runSequence(
        'clean',
        ['compile-sass', 'compile-scss'],
        'webpack'
    )
});