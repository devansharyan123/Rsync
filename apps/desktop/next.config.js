/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for building a static Electron app later
  images: { unoptimized: true }
};
module.exports = nextConfig;