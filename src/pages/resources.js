import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import ResourcesPhoto from '../components/CoverPhotos/ResourcesPhoto.js'

const resources = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resources" />
      <ResourcesPhoto />
    </Layout>
  )
}

export default resources

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "resources" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          name
          content
        }
      }
    }
  }
`
