const webpack = require('webpack')

module.exports = (config, { _env }) => {
  config.module.rules.push({
    test: /\.md$/,
    loader: 'raw-loader',
  })

  // Ethereum Auth - Required polyfills for missing node modules in Webpack V5
  // See https://github.com/WalletConnect/walletconnect-monorepo/issues/584
  config.resolve.fallback = {
    os: require.resolve(`os-browserify/browser`),
    https: require.resolve(`https-browserify`),
    http: require.resolve(`stream-http`),
    stream: require.resolve(`stream-browserify`),
    util: require.resolve(`util/`),
    url: require.resolve(`url/`),
    assert: require.resolve(`assert/`),
    crypto: require.resolve(`crypto-browserify`),
  }
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  )

  return config
}
