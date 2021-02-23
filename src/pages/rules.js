import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import RuleBlock from "../components/RuleComponents/RuleBlock.js"
import RuleAccordian from "../components/RuleComponents/RuleAccordian.js"
import "../pages/styles/rules.module.css"

const RuleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All rules" />
      <RuleAccordian category="The Basics">
        <RuleBlock category="The Basics"/>
      </RuleAccordian>
      <RuleAccordian category="Behavior">
        <RuleBlock category="Behavior"/>
      </RuleAccordian>
      <RuleAccordian category="COVID-19 Protocol">
        <RuleBlock category="COVID-19 Protocol"/>
      </RuleAccordian>
      <RuleAccordian category="Collars & Leashes">
        <RuleBlock category="Collars & Leashes"/>
      </RuleAccordian>
      <RuleAccordian category="Children">
        <RuleBlock category="Children"/>
      </RuleAccordian>
      <RuleAccordian category="Food & Drink">
        <RuleBlock category="Food & Drink"/>
      </RuleAccordian>
      <RuleAccordian category="Additional Guidelines">
        <RuleBlock category="Additional Guidelines"/>
      </RuleAccordian>
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
