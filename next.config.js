/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig, (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}
