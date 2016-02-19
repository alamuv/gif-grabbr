const React = require('react');
const ReactDOM = require('react-dom');
const App = require('components/app');
const getSticker = require('utils/getSticker');
const sticker = getSticker('cat');
sticker.then((response) => {
})

ReactDOM.render(<App />, document.getElementById('react'));
