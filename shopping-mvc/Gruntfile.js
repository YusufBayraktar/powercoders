module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: 'src/css/*.css',
				tasks: ['cssmin']
			},
			scripts: {
				files: 'src/js/*.js',
				tasks: ['uglify']
			},
			html: {
				files: 'src/html/index.prod.html',
				tasks: ['copy:html']
			},
			less: {
				files: 'src/css/style.less',
				tasks: ['less']
			},
			static: {
				files: 'src/static/*.*',
				tasks: ['copy:static']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['src/js/*.js', '!src/js/ui.js', 'src/js/ui.js'],
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		less: {
			build: {
				files: {
					'src/css/style.css': 'src/css/style.less'
				}
			}
		},
		cssmin: {
			option: {
				level:2
			},
			target: {
				files: {
					'build/css/style.min.css': ['src/css/*.css']
				}
			}
		},
		copy: {
			html: {
				src: 'src/html/index.prod.html',
				dest: 'build/index.html'
			},
			static: {
				file: [{
					expand: true,
					cwd: 'src/static',
					src: '*.*',
					dest: 'build/static'
				}]
			}
		},	
	});

	// Load the plugin that provides the uglify task.
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task(s).
	grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy']);
}	