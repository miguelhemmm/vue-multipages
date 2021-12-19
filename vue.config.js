module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],

    },
    vidanta: {
      entry: './src/builds/vidanta/main.js',
      title: 'Vidanta',
      chunks: ['chunk-vendors', 'chunk-common', 'vidanta'],

    },
    aspire: {
      entry: './src/builds/aspire/main.js',
      title: 'Aspire',
      chunks: ['chunk-vendors', 'chunk-common', 'aspire'],
    },
    // Optional parameters for the pages
    // app2: {
    //   entry: 'src/app2/main.js',
    //   template: 'public/index.html',
    //   filename: 'App2.html',
    //   title: 'App number tow',
    //   chunks: ['chunk-vendors', 'any-other-chunk', 'index'],
    // },
  },
};
