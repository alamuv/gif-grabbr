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
          // stage-0 is required for some of the prettier React syntax
          // https://babeljs.io/blog/2015/06/07/react-on-es6-plus
          presets: ['es2015','react','stage-0']
        },
      },
    ]
  },
  
  resolve: {
    modulesDirectories: [
      path.join(__dirname, `node_modules`),
      path.join(__dirname, `src`),
    ],
    extensions: [``, `.js`]
  } 
};

