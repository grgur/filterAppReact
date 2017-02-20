const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './public');

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity,
      filename: 'common.bundle.js'
    }),
    new webpack.NamedModulesPlugin()
  ];

  if (isProd) {

  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,
    entry: {
      js: './index.js',
      //vendor: ['react']
    },
    output: {
      path: outputPath,
      filename: 'bundle.js',
    },

    plugins,

    devServer: {
      contentBase: './public',
      historyApiFallback: true,
      port: 8080,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true
      },
    }
  }

};
