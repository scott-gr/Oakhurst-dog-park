import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import RuleAccordian from '../components/RuleComponents/RuleAccordian.js'
import RulesPhoto from '../components/CoverPhotos/RulesPhoto.js'
import './styles/rulespage.module.css'

const RuleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Park Rules" />
      <RulesPhoto />
      <section styleName="accordians">
        <RuleAccordian category="The Basics" />
        <RuleAccordian category="Behavior" />
        <RuleAccordian category="COVID-19 Protocol" />
        <RuleAccordian category="Collars and Leashes" />
        <RuleAccordian category="Children" />
        <RuleAccordian category="Food, Drink, and Smoking" />
        <RuleAccordian category="Additional Guidelines" />
      </section>
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

  }
`

// cut from pageQuery, is in ruleblock component
// allMarkdownRemark(
//   sort: { fields: [frontmatter___date], order: DESC }
//   filter: { fields: { collection: { eq: "rules" } } }
// ) {
//   nodes {
//     excerpt
//     frontmatter {
//       rulebrief
//       category
//       description
//     }
//   }
// }
