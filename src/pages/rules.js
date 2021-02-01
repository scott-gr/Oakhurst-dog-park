import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import { graphql } from "gatsby"

const RulesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Rules" />
      <div></div>
    </Layout>
  )
}

export default RulesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
