import { createMDX } from 'fumadocs-mdx/next';
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.extensions.push('.json');
    return config;
  },
};

export default withMDX(config);