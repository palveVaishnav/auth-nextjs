/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.quizrr.in',
            },
            {
                hostname: 'www.mathongo.com',
            },
            {
                hostname: 'cdn-assets.getmarks.app',
            },
        ],
    },
};

export default nextConfig;
