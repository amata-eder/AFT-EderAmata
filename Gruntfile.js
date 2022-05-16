module.exports = function(grunt) {

    grunt.initConfig({
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'index.min.html': 'index.html',     // 'destination': 'source'
                }
            }
        },
        htmllint: {
            all: ['*.html']
        },
        jsonlint: {
            sample: {
                src: [ 'json/appointments.json' ],
                options: {
                    formatter: 'prose'
                }
            }
        },
        concat: {
            dist: {
                src: ['assets/js/admin.js', 'assets/js/appointment.js', 'assets/js/dashboard.js', 'assets/js/person.js', 'assets/js/main.js'],
                dest: 'public/js/main.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'public/js/main.min.js': ['public/js/main.js']
                }
            }
        },
        cssmin: {
          target: {
              files: {
                  'public/css/styles.min.css': ['public/css/styles.css'],
                  'public/css/components.min.css': ['public/css/_components.css'],
              }
          }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/css/styles.css': 'assets/scss/styles.scss',       // 'destination': 'source'
                    'public/css/_components.css': 'assets/scss/_components.scss',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);
};

