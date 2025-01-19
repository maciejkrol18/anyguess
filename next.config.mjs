/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /**
     * TODO: Allowing all for now, limit to domains we control
     * when file storage is implemented
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
