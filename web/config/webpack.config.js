module.exports = (config, { _env }) => {
  config.module.rules.push({
    test: /\.md$/,
    loader: 'raw-loader',
  })

  return config
}
