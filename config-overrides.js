const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    zlib: require.resolve('browserify-zlib'),
  };
  
  alias({
    '@': 'src'
  })(config);

  return config;
};
