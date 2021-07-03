/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const CONFIG = {
  poweredByHeader: false,
  reactStrictMode: true,
  pwa: {
    runtimeCaching,
  },
};

module.exports = withPWA(CONFIG);
