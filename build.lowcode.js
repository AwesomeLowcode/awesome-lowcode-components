const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
    '@components': './src/components',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc",
        extraAssets: [
          'https://alifd.alicdn.com/npm/@alifd/fusion-ui@2.0.1/build/lowcode/assets-prod.json'
        ]
      },
    ],
  ],
};
