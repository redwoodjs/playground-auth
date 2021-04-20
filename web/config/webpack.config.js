module.exports = (config, { _env }) => {
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.title = 'RedwoodJS Auth Playground'
    }
  })

  config.module.rules.push({
    test: /\.md$/,
    loader: 'raw-loader',
  })

  return config
}
