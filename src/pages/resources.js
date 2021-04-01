import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import ResourceBlock from '../components/Resources/ResourceBlock.js'
import ResourcesPhoto from '../components/CoverPhotos/ResourcesPhoto.js'
import './styles/resourcepage.module.css'

const ResourcePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Resources" />
      <ResourcesPhoto />
      <section styleName="resourceList">
        <ResourceBlock />
      </section>
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
