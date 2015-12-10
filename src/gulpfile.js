var stripComments, notifier, parentDir, modules_dir, gulp, gulpConcat, gulpUtil, gulpJshint, gulpStylus, streamqueue, gulpPlumber, nib, jshint, gutil, plumber, production, gulpJade, gulpFilter, livescript;

require('matchdep').filterDev('gulp-*').forEach(function (module) {
    global[module.replace(/^gulp-/, '')] = require(module);
});

stripComments = require('gulp-strip-comments');
notifier = require('node-notifier');
parentDir = '..';
modules_dir = 'node_modules';
gulp = require('gulp');
gulpConcat = require('gulp-concat');
gulpUtil = require('gulp-util');
gulpJshint = require('gulp-jshint');
gulpStylus = require('gulp-stylus');
streamqueue = require('streamqueue');
gulpPlumber = require('gulp-plumber');
nib = require('nib');
jshint = require('gulp-jshint');
livescript = require('gulp-livescript');
gutil = gulpUtil;

plumber = function () {
    return gulpPlumber({
        errorHandler: function (it) {
            gutil.beep();
            return gutil.log(gutil.colors.red(it.toString()));
        }
    });
};

if (gutil.env.env === 'production') {
    production = true;
}

gulp.task('default', ['build']);

gulp.task('build', ['jade-compile', 'js:copy', 'ls:copy', 'css'], function () {
    notifier.notify({
        title: 'Compilation Complete',
        message: "The code has been compiled in the project's root directory"
    });
});

gulp.task('dev', ['jade-compile', 'ls:copy', 'ls:app', 'css'], function (done) {
    gulp.watch(['jade/**/*.jade'], ['jade-compile']);
    return gulp.watch('stylus/**/*.styl', ['css']);
});

gulpJade = require('gulp-jade');

// task for rendering jade files to HTML
gulp.task('jade-compile', function () {
    // only return the compiled index to root
    return gulp.src(['jade/index.jade']).pipe(gulpJade({
        pretty: true,
        basedir: parentDir + "/web"
    })).pipe(gulp.dest(parentDir + "/web"));
});

gulpFilter = require('gulp-filter');
gulpConcat = require('gulp-concat');

gulp.task('ls:copy', function () {
    var s;
    s = streamqueue({
        objectMode: true
    });

    gulp.src(['ls/**/*.ls'])
        .pipe(livescript())
        .pipe(stripComments())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulpConcat('scripts.js'))
        .pipe(gulp.dest(parentDir + "/js"));
    return s.done();
});

gulp.task('js:copy', function () {
    var s;
    s = streamqueue({
        objectMode: true
    });

    gulp.src(['js/**/*.js'])
        .pipe(stripComments())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulpConcat('main.js'))
        .pipe(gulp.dest(parentDir + "/web/js"));
    return s.done();
});

gulp.task('css', function () {
    var styl, s;
    styl = gulp.src('stylus/**/*.styl').pipe(gulpFilter(function (it) {
        return !/\/_[^/]+\.styl$/.test(it.path);
    })).pipe(gulpStylus({
        use: [nib()],
        'import': ['nib']
    })).pipe(gulpConcat('styles.css')).pipe(gulp.dest(parentDir + "/web"));

    return s = streamqueue({
        objectMode: true
    });
});
