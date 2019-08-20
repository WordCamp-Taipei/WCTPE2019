const postcss 			= require( 'gulp-postcss' );
const gulp 					= require( 'gulp' );
const autoprefixer 	= require( 'autoprefixer' );
const cssnano 			= require( 'cssnano' );
const rename    		= require( 'gulp-rename' );
const livereload 		= require( 'gulp-livereload' );
const concat 				= require( 'gulp-concat' );

function css() {
	return gulp.src( './src/**/*.css' )
		.pipe( postcss([
			autoprefixer()
		]) )
		.pipe( concat('style.css') )
		.pipe( gulp.dest( './dest' ) )
		.pipe( postcss([
			cssnano({
				'zindex': false
			})
		]))
		.pipe( rename({suffix: '.min'}) )
		.pipe( gulp.dest('./dest') )
		.pipe( livereload() );
}

function watch() {
	livereload.listen();
	gulp.watch( './src/**/*.css', gulp.series( css ) );
}

exports.css = css;
exports.default = gulp.series( css, watch );
