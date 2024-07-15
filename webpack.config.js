const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: 'file-loader',
      },
      // Other loaders...
    ],
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
