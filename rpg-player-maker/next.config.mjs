const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProd && !process.env.USE_API ? { output: "export" } : {}),

  basePath: isProd ? "/RPG-PLayerMaker" : "",
  assetPrefix: isProd ? "/RPG-PLayerMaker/" : "",
  images: {
    unoptimized: true,
  },

  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
