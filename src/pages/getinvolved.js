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
      Follow blog and on facebook for announcements

      -ways to volunteer
      Friday mornings are volunteer work days. show up at 9, work til 11:30/12.
      spread mulch, maintain paths, clean and clear debris




      -donate button - ask Lee
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
