'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HelloWorld;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HelloWorld() {
  return _react2.default.createElement(
    'h1',
    null,
    'Hello World!'
  );
} // import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// // import Vk from './Vk';
// export * from './App';
// export * from './Vk';
// export * from './DefaultVK';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Vk />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();