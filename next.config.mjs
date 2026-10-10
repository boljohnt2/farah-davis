/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The site used to be static pages; keep old URLs working.
    return [
      { source: '/index.html', destination: '/', permanent: false },
      {
        source: '/:page(about|book|coaching|kitchen|pr|show).html',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
