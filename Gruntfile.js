module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'test'
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

};