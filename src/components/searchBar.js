const React = require('react');

const styles = {fontSize: '2em'};

module.exports =
class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (evt) => {
    const term = evt.target.value;
    this.setState({searchTerm: term});
    this.props.onSearch(term);
  }

  handleKeyUp = (evt) => {
    const ENTER_KEY_CODE = 13;
    if(evt.keyCode === 13) this.props.onSearch(this.state.searchTerm);
  }

  render () {
    return <input
             type="text"
             onChange={this.handleChange}
             onKeyUp={this.handleKeyUp}
             placeholder="Type a tag name here"
             style={styles}
             value={this.state.searchTerm}
            />
  }
}

