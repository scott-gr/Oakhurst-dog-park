/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Oakhurst Dog Park`,
    author: {
      name: `Scott Griffin`,
      summary: `Web developer based in Atlanta - https://yoscott.com `,
    },
    description: `A community page with guidelines and news about the Oakhurst Dog Park`,
    siteUrl: `https://oakhurstdogpark.com`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify",
    `gatsby-plugin-react-helmet`
  ],
}
