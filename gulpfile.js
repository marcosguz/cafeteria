const { src, dest, watch, series, parallel } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

function css( done ) {
    src('src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( dest('build/css') );

    done();
}

function imagenes ( done ) {
    src('src/img/**/*')
        .pipe( imagemin({ optimizationLevel: 3 }) )
        .pipe( dest('build/img') );

    done()
}

function versionWebp() {
    return src('src/img/**/*.{png,jpg}')
                .pipe( webp() )
                .pipe( dest('build/img') );
}

function verionAvif() {

    const opciones = {
        quality: 50
    }

    return src('src/img/**/*.{png,jpg}')
                .pipe( avif( opciones ) )
                .pipe( dest('build/img') )
}
 
function dev() {
    watch( 'src/scss/**/*.scss', css );
    watch( 'src/img/**/*', imagenes );
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.verionAvif = verionAvif;
exports.default = series( imagenes, versionWebp, verionAvif, css, dev )