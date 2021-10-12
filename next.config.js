module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
  }
}
