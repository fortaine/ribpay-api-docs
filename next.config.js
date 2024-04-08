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
  },
  async headers() {
    return [
      {
        // matching all Swaggers routes
        source: "/swaggers/:slug",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
};
