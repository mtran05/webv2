/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    webpack: (config, { isServer }) => {
      // Add a rule for HTML files
      config.module.rules.push({
        test: /\.html$/,
        use: 'html-loader',
      });
  
      return config;
    },
  };
