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
          'https://alifd.alicdn.com/npm/@alilc/lowcode-materials@1.1.0/build/lowcode/assets-prod.json'
        ]
      },
    ],
  ],
};
