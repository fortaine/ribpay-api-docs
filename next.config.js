require('dotenv-flow').config({
  node_env: process.env.APP_ENV || process.env.NODE_ENV || 'development',
  silent: true
});

/** @type {import('next').NextConfig} */
module.exports ={
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/reference-direct-payment-api',
        permanent: false
      }
    ];
  }
};
