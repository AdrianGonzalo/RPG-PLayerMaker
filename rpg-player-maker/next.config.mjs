const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/RPG-PLayerMaker" : "",
  assetPrefix: isProd ? "/RPG-PLayerMaker/" : "",
};

export default nextConfig;
