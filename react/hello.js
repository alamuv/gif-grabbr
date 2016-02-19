const React = require('react');
const ReactDOM = require('react-dom');

class TestComponent extends React.Component {
  render () {
    return <div>Hello World!</div>; 
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('hello'));
