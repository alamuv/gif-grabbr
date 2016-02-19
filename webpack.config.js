const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        },
      },
    ]
  }
};

