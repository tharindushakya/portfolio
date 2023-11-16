module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/js/**/*.js'],
        dest: 'src/dist/js/scripts.js',
      },
      css: {
        src: ['src/css/**/*.css'],
        dest: 'src/dist/css/styles.css',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        src: 'src/dist/js/scripts.js',
        dest: 'src/dist/js/scripts.min.js',
      },
    },
    cssmin: {
      css: {
        src: 'src/dist/css/styles.css',
        dest: 'src/dist/css/styles.min.css',
      },
    },
    sass: {
      dist: {
        options: {
          sourcemap: false
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: 'src/css',
          ext: '.css'
        }]
      },
    },
    watch: {
      css: {
        files: ['src/scss/*.scss', 'src/css/*.css'],
        tasks: ['sass', 'concat:css', 'cssmin']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['concat:js', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass', 'watch']);
};
