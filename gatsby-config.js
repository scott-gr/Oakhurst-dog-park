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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD google TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oakhurst Dog Park`,
        short_name: `Dog Park`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: ``,
        // ADD ICON
      },
    },

    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify",
    `gatsby-plugin-react-helmet`,
  ],
}
