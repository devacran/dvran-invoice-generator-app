/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/invoice-generator",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
