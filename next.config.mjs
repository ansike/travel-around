/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/tab/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
