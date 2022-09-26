const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const isProd = !isDev;

export {
  isProd,
  isDev,
  mode,
};

