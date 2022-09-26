import config from '../../webpack.config.js';
import paths from '../../paths.js';

const devServer = {
  port: 3000,
  client: {
    logging: 'none',
  },
  hot: false,
  static: {
    directory: paths.pathDist,
  },
};

export default {
  ...config,
  devServer,
  optimization: {
    runtimeChunk: 'single',
  },
};
