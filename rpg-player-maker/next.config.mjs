const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/rpg-player-maker" : "",
  assetPrefix: isProd ? "/rpg-player-maker/" : "",
};

export default nextConfig;
