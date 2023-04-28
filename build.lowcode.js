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
          'https://alifd.alicdn.com/npm/@alifd/layout@2.0.12/build/lowcode/assets-prod.json'
        ]
      },
    ],
  ],
};
