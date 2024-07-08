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
        NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL
     }
};

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    register: true,

    // fallbacks: {
    //     // Failed page requests fallback to this.
    //     document: "/~offline",
    //     // This is for /_next/.../.json files.
    //     data: "/fallback.json",
    //     // This is for images.
    //     image: "/fallback.webp",
    //     // This is for audio files.
    //     audio: "/fallback.mp3",
    //     // This is for video files.
    //     video: "/fallback.mp4",
    //     // This is for fonts.
    //     font: "/fallback-font.woff2",
    //   },
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        taint: true,
    },
    env: {
        NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL
     }
  });

// module.exports = nextConfig
