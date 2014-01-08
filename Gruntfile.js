'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                process: true
            },
            dev_and_test: {
                files: {
                    'coms/dealerChat/<%=pkg.version %>/src/js/<%= pkg.name %>.<%=pkg.version %>.js': ['coms/dealerChat/<%=pkg.version %>/src/js/begin-define.prefix',
                        'coms/dealerChat/<%=pkg.version %>/src/js/services/notificationService.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/services.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/directives/dealerChatDirective.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/directives.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/dealerChat.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/end-define.suffix'
                    ],
                    'coms/dealerChat/<%=pkg.version %>/src/js/<%= pkg.name %>.<%=pkg.version %>-test.js': ['coms/dealerChat/<%=pkg.version %>/src/js/directives/dealerChatDirective.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/services/notificationService.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/services.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/directives.js',
                        'coms/dealerChat/<%=pkg.version %>/src/js/dealerChat.js',
                    ]
                }
            }
        },
        uglify: {
            build: {
                src: 'coms/dealerChat/<%=pkg.version %>/src/js/<%= pkg.name %>.<%=pkg.version %>.js',
                dest: 'coms/dealerChat/<%=pkg.version %>/src/js/<%= pkg.name %>.<%=pkg.version %>.min.js'
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Tasks.
    grunt.registerTask('default', ['concat', 'uglify']);

};