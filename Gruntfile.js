module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        expand: true,
        flatten: true,
        src: ['source/*.*'],
        dest: 'dist'
      }
    },
    clean: {
      dist: ['dist']
    },
    git_deploy: {
      dist: {
        options: {
          url: 'https://github.com/loki2302/git-force-push-experiment.git',
          message: 'deploying with Grunt',
          branch: 'grunt-deployed'
        },
        src: 'dist'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-git-deploy');

  grunt.registerTask('default', 'Build and deploy', [
    'copy:dist',
    'git_deploy:dist',
    'clean:dist'
  ]);
};
