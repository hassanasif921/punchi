const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            zlib: require.resolve('browserify-zlib'),
            buffer: require.resolve('buffer/'),
            process: require.resolve('process/browser'),
            http: require.resolve("micro-ftch"),
            stream: false, 
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
        // Add NodePolyfillPlugin to polyfill Node.js core modules
        new NodePolyfillPlugin(),
    ],
    externalsPresets: { node: true },
    externals: [nodeExternals()],
};
