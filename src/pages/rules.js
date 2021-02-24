import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import RuleAccordian from "../components/RuleComponents/RuleAccordian.js"
import "../pages/styles/rules.module.css"

const RuleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All rules" />
      <main>
        <RuleAccordian category="The Basics" />
        <RuleAccordian category="Behavior" />
        <RuleAccordian category="COVID-19 Protocol" />
        <RuleAccordian category="Collars & Leashes" />
        <RuleAccordian category="Children" />
        <RuleAccordian category="Food & Drink, and Smoking" />
        <RuleAccordian category="Additional Guidelines" />
      </main>
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
