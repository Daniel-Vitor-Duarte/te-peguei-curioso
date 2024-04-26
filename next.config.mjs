/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/fluxo",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      unoptimized: true,
  },
};

export default nextConfig;
