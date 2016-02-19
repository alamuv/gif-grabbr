const React = require('react');

module.exports =
class ImageDisplay extends React.Component {
  render () {
    const url = this.props.loading ? "loading.gif" : this.props.url;
    const width = this.props.width || 200;
    return <img src={url} width={width}/>
  }
}

