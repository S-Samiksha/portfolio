/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio/", // This ensures assets like images are loaded from the correct path
  images: {
    loader: "default",
    path: "/portfolio/", // Ensures images use the correct path
  },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
