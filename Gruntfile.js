'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
         // Unit tests.
        mochaTest: {
            all: {
                options: {
                    reporter: 'spec',
                    clearRequireCache: true,
                },
                src: ['test/*.spec.js'],
            },
        },

        watch: {
            mochaTest: {
                files: [
                    'Gruntfile.js',
                    '{app,test}/**/*.js',
                ],
                tasks: ['mochaTest'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'mochaTest',
        'watch',
    ]);
};
