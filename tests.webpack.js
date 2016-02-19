const chai = require('chai');

global.assert = chai.assert;

const context = require.context('./src', true, /.test\.js$/);
context.keys().forEach(context);
