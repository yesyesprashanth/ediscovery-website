/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/assets/solutions/zinsser/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-ancestors 'self';"
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
