module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['src/js/*.js', '!src/js/ui.js', 'src/js/ui.js'],
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}	
	});

	// Load th plugin that provides the uglify task.
	grunt.loadNpmTasks('grunt-contrib-uglify-es');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);
}	