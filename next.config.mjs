/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "spaceflightnow.com",
      },
      {
        protocol: "http",
        hostname: "spaceflightnow.com",
      },
    ],
  },
};
// allow images from all domains
export default nextConfig;
//http://images-assets.nasa.gov/image/iss071e373018/iss071e373018~large.jpg
