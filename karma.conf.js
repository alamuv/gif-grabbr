const webpackConfig = require(`./webpack.config`)
delete webpackConfig.entry
delete webpackConfig.output
delete webpackConfig.plugins

webpackConfig.module.noParse = [/sinon/]

webpackConfig.externals = Object.assign({}, webpackConfig.externals, {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
})

module.exports = karma => {
  const config = {
    basePath: ``,

    frameworks: [`mocha`],

    files: [`tests.webpack.js`],

    logLevel: karma.LOG_ERROR,

    preprocessors: {
      'tests.webpack.js': [`webpack`],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },

    reporters: [`mocha`],
  }

  config.browsers = [`Chrome`]

  karma.set(config)
}
