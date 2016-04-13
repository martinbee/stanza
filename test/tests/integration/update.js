/* eslint-env mocha */
var fs = require('fs');
var shell = require('shelljs');
var assert = require('chai').assert;
var stanza = require('../../../lib/index.js');
var createMeteorProject = require('../helpers/create-meteor-project.js');

describe('update', function () {
  this.timeout(10 * 60 * 1000);

  it('update a meteor app', function () {
    createMeteorProject();
    shell.exec('mkdir -p client/imports/components/');
    stanza('update');

    assert(fs.statSync('client/imports/components/ComponentA.jsx').isFile());
    assert(fs.statSync('public/images/webflow.jpg').isFile());
    assert(fs.statSync('client/css/lib/webflow.css').isFile());
    assert(fs.statSync('client/js/webflow.js').isFile());
  });
});