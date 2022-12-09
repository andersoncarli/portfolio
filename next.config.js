/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  ...nextTranslate(),

  // https://blog.bitsrc.io/html-pages-in-nextjs-using-rewrites-bc5f56ea3ed
  rewrites: async () => [
    {
      source: '/dash',
      destination: '/dash/index.html',
    },
    {
      source: '/explorer',
      destination: '/explorer/index.html',

    },
    {
      source: '/portfolio',
      destination: '/portfolio/index.html',
    },
    {
      source: '/admin',
      destination: '/admin/index.html',

    },
  ],

  // reactStrictMode: true, // problems with useEffect & useLayoutEffect
  swcMinify: true,
}

// console.log(module.exports)
