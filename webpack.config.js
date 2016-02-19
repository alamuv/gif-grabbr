const path = require('path');

module.exports = {
  entry: './react/bundle.js',
  output: {path: __dirname, filename: 'output.js'},
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        },
      }, 
    ]
  }
};

