module.exports = function(grunt) {

grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'assets/css/style.css': 'assets/sass/app.scss'
            }
        }
    },
   
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
         livereload: true
      }
    }
    
});

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);


};