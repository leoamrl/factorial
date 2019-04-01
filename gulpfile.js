// npm install gulp gulp-sass gulp-concat gulp-minify gulp-htmlmin gulp-connect gulp-autoprefixer gulp-minify-css gulp.spritesmith

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		minify = require('gulp-minify'),
		htmlmin = require('gulp-htmlmin'),
		connect = require('gulp-connect'),
    prefix = require('gulp-autoprefixer'),
		minifycss = require('gulp-minify-css'),
		spritesmith = require('gulp.spritesmith');

/*******CONNECT***********/

gulp.task('connectDist', function() {
  connect.server({
		name: 'Factorial',
		root: 'dist',
		port: 3000,
		livereload: true
  });
});

/*******CSS***********/

gulp.task('css', function() {
	gulp.src('src/sass/style.scss')
	.pipe(sass({
		noCache: true,
		precision: 4,
		unixNewlines: true
	}))
	.pipe(prefix('last 3 version'))
	.on('error', function (err) {
		console.log(err.toString());

		this.emit('end');
	})
	.pipe(connect.reload())
	
	.pipe(gulp.dest('dist/css'))
});

/*******CONCAT***********/

gulp.task('js', function () {    
	return gulp.src(['dist/js/*.js', 'assets/js/functions.js'])
		.pipe(concat('scripts.js'))
		.pipe(minify({
			ext:{
				min:'.js'
			},
			noSource: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('concatcss', function () {    
	return gulp.src(['dist/css/style.css', 'dist/css/sprites.css', 'dist/css/*.css'])
		.pipe(concat('main.css'))
		.pipe(minifycss())
		.pipe(connect.reload())
		.pipe(gulp.dest('dist'));
});

/*******SPRITES***********/

gulp.task('sprite', function () {
	var spriteData = gulp.src('src/sprites/*.png')
		.pipe(spritesmith({
			imgName: '../img/sprites.png',
			cssName: 'sprites.css'
		}));
	spriteData.img.pipe(gulp.dest('dist/img'));
	spriteData.css.pipe(gulp.dest('dist/css'));
});

/*******MINIFYHTML***********/

gulp.task('html', () => {
  return gulp.src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

/*******WATCH***********/

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.{sass,scss}', ['css']);
	gulp.watch('src/sprites/*.png', ['sprite']);
});

/*******DEFAULT***********/

gulp.task('default', ['connectDist','css','html','js','concatcss','sprite','watch']);