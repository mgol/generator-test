'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('test generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                done(err);
                return;
            }

            this.app = helpers.createGenerator('test:app', [
                '../../app',
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            '.jshintrc',
        ];

        helpers.mockPrompt(this.app, {
            name: 'name',
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
