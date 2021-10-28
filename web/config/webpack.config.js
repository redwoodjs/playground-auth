module.exports = (config, { _env }) => {
  config.module.rules.push({
    test: /\.md$/,
    type: 'asset/source',
  })

  return config
}
