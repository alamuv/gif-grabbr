const React = require('react');

const GIPHY_LOADING_URL = `https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW`;
const styles = {
  height: '300px',
  margin: '0.5em'
};

module.exports =
class ImageDisplay extends React.Component {
  giphySourceUrl= () => {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  }

  render () {
    const url = this.props.loading ? "loading.gif" : this.props.url;
    const width = this.props.width || 200;
    return (
      <div style={styles}>
        <a href={this.giphySourceUrl()} title='view this on giphy' target='new'>
          <img src={url} width={width} />
        </a>
      </div>
    );
  }
}

