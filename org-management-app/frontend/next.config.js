module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000',
  },
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
};