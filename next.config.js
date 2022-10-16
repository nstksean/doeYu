// next.config.js
module.exports = {
    images: {
        domains: ['newtaipei.travel', 'https://travel.tycg.gov.tw/', 'travel.nantou.gov.tw'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],

    },
}