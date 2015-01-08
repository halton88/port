module.exports = function(grunt) {
  var d = (new Date().getMonth() + 1) + '_' + new Date().getDate() + '_' +  new Date().getFullYear();
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
        jsDir: 'resources/resources/js/',
        cssDir: 'resources/styles/',
        jsDistDir: 'build/resources/js/',
        cssDistDir: 'build/resources/styles/',
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            local: {
              files: ['Gruntfile.js', 'compiled/local/resources/js/**/*.js'],
              options: {
                globals: {
                  jQuery: true
                }
              }
            },
            live: {
              files: ['Gruntfile.js', 'compiled/live/resources/js/**/*.js'],
              options: {
                globals: {
                  jQuery: true
                }
              }
            }
        },

        jade: {
          local: {
            options: {
              pretty: true
            },
            files: [{
              expand: true, cwd: 'src/jade/includes', src: ['**/*.jade'], dest: 'compiled/local/templates/includes', ext: '.html'
            },
            {
              expand: true, cwd: 'src/jade/pages', src: ['**/*.jade'], dest: 'compiled/local/templates/pages', ext: '.html'
            },
            {
              expand: true, cwd: 'src/jade', src: ['index.jade'], dest: 'compiled/local', ext: '.html'
            }]
          },
          live: {
            options: {
              pretty: true
            },
            files: [{
              expand: true, cwd: 'src/jade/includes', src: ['**/*.jade'], dest: 'compiled/live/templates/includes', ext: '.html'
            },
            {
              expand: true, cwd: 'src/jade/pages', src: ['**/*.jade'], dest: 'compiled/live/templates/pages', ext: '.html'
            },
            {
              expand: true, cwd: 'src/jade', src: ['index.jade'], dest: 'compiled/live', ext: '.html'
            }]
          }
        },

        clean: {
            options: {
              force: true,
            },
            local: {
              src: [ 'compiled/local' ]
            },
            live: {
              src: [ 'compiled/live' ]
            }
        },
        
        stylus: {
          options: {
            use: [ require('nib') ],
            compress: false,
            linenos: true
          },
          local: {
            files: [{ expand: true, cwd: 'src/stylus', src: ['**/*.styl'], dest: 'compiled/local/resources/pub/styles', ext : '.css' }]
          },
          live: {
            files: [{ expand: true, cwd: 'src/stylus', src: ['**/*.styl'], dest: 'compiled/live/resources/pub/styles', ext: '.css' }]
          }
        },

        cssmin: {
            options: {
              keepSpecialComments: '*',
              report: 'min'
            },
            local: {
              expand: true, 
              cwd: 'resources/styles/', 
              src: ['*.css'], 
              dest: 'compiled/local/resources/pub/styles', 
              ext: '.css'                            
            },
            live: {
              expand: true, 
              cwd: 'resources/styles/', 
              src: ['*.css'], 
              dest: 'compiled/live/resources/pub/styles', 
              ext: '.css' 
            }
        },
        
        lsc: {
          local: {
            files: [{ expand: true, cwd: 'src/ls', src: ['**/*.ls'], dest: 'compiled/local/resources/pub/js', ext: '.js' }]
          },
          live: {
            files: [{ expand: true, cwd: 'src/ls', src: ['**/*.ls'], dest: 'compiled/live/resources/pub/js', ext: '.js' }]
          }
        },
        
        watch: {
            jade: {
              files: ['src/jade/**/*.jade'],
              tasks: ['jade:local']
            },
            stylus: {
              files: ['src/stylus/**/*.styl'],
              tasks: ['stylus:local']
            },
            lsc: {
              files: ['src/ls/**/*.ls'],
              tasks: ['lsc:local']
            },
            copy: {
              files: ['resources/**/*'],
              tasks: ['copy:local']
            }
        },

        uglify: {
          options: {
            preserveComments: 'some'
          },    
          live: {
            files: [
              { expand: true, cwd: 'build/public/js', src: ['**/*.js'], dest: 'release/prod/public/js', ext: '.js' }
            ]
          }
        },

        copy: {
          local: {
            files: [
              { expand: true, cwd: 'resources', src: ['**/*.*'], dest: 'compiled/local/resources' },
              { expand: true, cwd: 'src/jade', src: ['*.config'], dest: 'compiled/local' },
              { expand: true, cwd: 'src/jade', src: ['*.ico'], dest: 'compiled/local' },
            ]
          },
          live: {
            files: [
              { expand: true, cwd: 'resources', src: ['**/*.*'], dest: 'compiled/live/resources' },
              { expand: true, cwd: 'build', src: ['index.jade'], dest: 'compiled/live' },
              { expand: true, cwd: 'src/php', src: ['**/*.php'], dest: 'compiled/live' }
            ]
          }
        }
  });

  grunt.registerTask('local', ['clean:local', 'jade:local', 'stylus:local', 'lsc:local', 'copy:local']);
  grunt.registerTask('live',  ['clean:live','jade:live', 'stylus:live', 'lsc:live', 'copy:live' ]);
  grunt.registerTask('build', ['local', 'live']);
  grunt.registerTask('rebuild', ['clean', 'build']);
  grunt.registerTask('default', ['local']);
}