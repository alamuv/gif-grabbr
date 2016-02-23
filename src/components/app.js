const React = require('react');
const getGif = require('utils/getGif');
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
    gif: {}
  }

  handleSearch = term => {
    this.setState({loading: true});
    if(term.length > 2) {
      getGif(term).then((gif) => {
        this.setState({loading: false, gif, term});
      })
    }
  }
  
  render () {
    return (
      <div style={styles}>
        <h1>gif grabbr</h1>
        <p>find a GIF on <a href='http://giphy.com'>giphy</a>. Keep pressing enter for more results.</p>
        <div>
          <SearchBar onSearch={this.handleSearch}/>
        </div>
        <ImageDisplay 
          loading={this.state.loading} 
          url={this.state.gif.url} 
          width={this.state.gif.width}
          sourceUrl={this.state.gif.sourceUrl}
          />
      </div>
    );
  }
}

