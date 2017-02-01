'use strict';

var _alexia = require('alexia');

var _alexia2 = _interopRequireDefault(_alexia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _alexia2.default.createApp();

app.intent('HelloIntent', 'Hello', function () {
  return 'Hello from Alexia app';
});

app.intent('TurnOnIntent', 'Light on', function () {
  return 'Your wish is my command';
});

var config = {
  port: process.env.PORT || 4000
};
app.createServer(config).start(function () {
  app.saveSpeechAssets();
  console.log('Server started');
});