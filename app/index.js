'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
    },

    askFor: function () {
        var done = this.async();

        var prompts = [
            {
                name: 'name',
                message: 'How do you want to name your project?',
            },
        ];

        this.prompt(prompts, function () {
           done();
        }.bind(this));
    },

    app: function () {
        this.copy('__jshintrc', '.jshintrc');
    },
});

module.exports = Generator;
