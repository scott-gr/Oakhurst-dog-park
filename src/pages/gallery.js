import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

const GalleryPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Gallery" />
      <div></div>
    </Layout>
  )
}

export default GalleryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
