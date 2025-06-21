import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://185.191.141.196:8000/api/:path*",
            },
        ];
    },
};

export default nextConfig;
