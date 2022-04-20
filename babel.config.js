module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: '14',
          esmodules: true,
          ie: '10'
        }
      }
    ]
  ],
  sourceType: 'unambiguous'
  // ignore: [
  //   '**/*.test.js'
  // ]
}
