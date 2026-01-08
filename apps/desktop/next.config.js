/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Creates a static build
  images: {
    unoptimized: true, // Required because Electron doesn't support Next.js Image Optimization
  },
};

export default nextConfig;