/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });

    // PDF file loader configuration
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
