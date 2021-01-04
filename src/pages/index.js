import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import styles from "./styles/index.module.css"
import Hero from "../components/Hero/Hero.js"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <div className={styles.hero}>
        <h1>OAKHURST DOG PARK</h1>
        <Hero />
      </div>
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
  }
`
