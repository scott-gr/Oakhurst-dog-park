import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import styles from "./styles/index.module.css"
import PhotoSlider from "../components/Slider/slider.js"
import Announcement from "../components/Announcement/Announcement.js"
import { graphql } from "gatsby"
// import Button from "../components/Button/Button.js"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />

        <h1 className={styles.bigText}>Oakhurst Dog Park</h1>
        <h4 className={styles.smallText}>Some really great, eye-catching words about the dog park. This text is fun, not necessarily informative.</h4>

      <div className={styles.overlay} />
      <PhotoSlider />
      < Announcement />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
