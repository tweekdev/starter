const { TramOutlined } = require("@mui/icons-material");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: {
            cssPropOptimization: true,
        },
    },
};

module.exports = nextConfig;
