/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cddwlp.cn'],
  },
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
