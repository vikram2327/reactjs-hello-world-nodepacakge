'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Vk() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      'Vk Hello Package',
      React.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      )
    )
  );
}

exports.default = Vk;