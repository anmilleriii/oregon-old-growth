/** @type {import('next').NextConfig} */
const nextConfig = {
  // This app is deployed under a single Vercel project at https://anmiller.com using NextJS multi-zones.
  basePath: "/oregon",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/oregon",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
