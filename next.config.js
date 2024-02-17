/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        taint: true,
    },
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL
     }
}

module.exports = nextConfig
