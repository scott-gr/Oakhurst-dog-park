import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import Ruleblock from "../components/RuleBlock/Ruleblock.js"
import "../pages/styles/rules.module.css"

const RuleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All rules" />
      <details>
        <summary>The Basics</summary>
        <Ruleblock value="The Basics" />
      </details>
      <details>
        <summary>Behavior</summary>
      </details>
      <details>
        <summary>Covid-19 Protocol</summary>
      </details>
      <details>
        <summary>Collars & Leashes</summary>
      </details>
      <details>
        <summary>Children</summary>
      </details>
      <details>
        <summary>Food & Drink</summary>
        <Ruleblock value="Food & Drink" />
      </details>
      <details>
        <summary>Additional Guidelines</summary>
      </details>
    </Layout>
  )
}

export default RuleIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "rules" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          rulebrief
          category
          description
        }
      }
    }
  }
`
