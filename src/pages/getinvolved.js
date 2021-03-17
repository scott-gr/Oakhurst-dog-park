import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import GetInvolvedPhoto from '../components/CoverPhotos/GetInvolvedPhoto.js'
import './styles/getinvolved.module.css'

const GetInvolvedPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Get Involved" />
      <GetInvolvedPhoto />

      {/* 
      -Summary of community involvement
      -ways to volunteer
      -donate button 
      */}
    </Layout>
  )
}

export default GetInvolvedPage

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
