import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import styles from "./styles/index.module.css"
import Hero from "../components/Hero/Hero.js"
import { graphql } from "gatsby"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <main className={styles.hero}>
        <Hero className={styles.heroimage} />
        <h4 className={styles.about}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </h4>
        <div className={styles.bottomnav}>
          <p>choice 1</p>
          <p>choice 2</p>
          <p>choice 4</p>
        </div>
      </main>
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
