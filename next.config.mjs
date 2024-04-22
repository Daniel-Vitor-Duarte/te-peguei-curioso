/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/te-peguei-curioso",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      unoptimized: true,
  },
};

export default nextConfig;
