/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'standalone',
    webpack: (config) => {
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig;