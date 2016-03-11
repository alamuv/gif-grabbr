const React = require('react');
const ReactDOM = require('react-dom');
const App = require('components/app');
const getGif = require('utils/getGif');

ReactDOM.render(<App getGif={getGif}/>, document.getElementById('react'));
