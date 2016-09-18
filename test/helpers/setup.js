require('babel-register');
require ('babel-polyfill');
require('ignore-styles');

global.document = require('jsdom').jsdom('<body><div id="root"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
