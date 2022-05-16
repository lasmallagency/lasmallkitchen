let gatsbyActiveEnv = process.env.GATSBY_ACTIVE_ENV
if (!gatsbyActiveEnv) {
  gatsbyActiveEnv = 'development'
}
require('dotenv').config({
  path: `.env.${gatsbyActiveEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `La Small Kitchen`,
    siteUrl: process.env.GATSBY_WEBSITE_URL,
  },
  plugins: [],
}
