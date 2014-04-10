'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var originalCwd = process.cwd();

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

    afterEach(function () {
        process.chdir(originalCwd);
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
