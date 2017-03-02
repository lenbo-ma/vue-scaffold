var merge = require('webpack-merge')

const common = {
}

const dev = {
  env: 'development'
}

const test = {
  env: 'test'
}

const production = {
  env: 'production'
}

module.exports = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return merge(common, production)
    case 'test':
      return merge(common, test)
    default:
      return merge(common, production)
  }
})()
