const React = require('react');
const getSticker = require('utils/getSticker');
const SearchBar = require('components/searchBar');
const ImageDisplay = require('components/imageDisplay');

const styles = {
  margin: '0 auto',
  textAlign: 'center',
  width: 500
}

module.exports = 
class App extends React.Component {
  state = {
    loading: true,
    term: '',
    sticker: {}
  }

  handleSearch = term => {
    this.setState({loading: true});
    if(term.length > 2) {
      getSticker(term).then((sticker) => {
        this.setState({loading: false, sticker, term});
      })
    }
  }
  
  render () {
    return (
      <div style={styles}>
        <h1>GIFGrabbr</h1>
        <div>
          <SearchBar onSearch={this.handleSearch}/>
        </div>
        <ImageDisplay loading={this.state.loading} url={this.state.sticker.url} width={this.state.sticker.width}/>
      </div>
    );
  }
}

