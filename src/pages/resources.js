import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import './styles/resourcepage.module.css'
import ResourceBlock from '../components/Resources/ResourceBlock.js'
import ResourcesPhoto from '../components/CoverPhotos/ResourcesPhoto.js'

const ResourcePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resources" />
      <ResourcesPhoto />
      <ResourceBlock />
    </Layout>
  )
}

export default ResourcePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
