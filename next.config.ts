import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://eu-central-1-shared-euc1-02.graphassets.com/**'),
    ],
  },
};

export default nextConfig;
