import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import styles from "./styles/index.module.css"
import Hero from "../components/Hero/Hero.js"
import PhotoSlider from "../components/Slider/slider.js"
import { graphql } from "gatsby"
import Button from "../components/Button/Button.js"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <div className={styles.heroImage} >
        <Hero/>
      </div>
      <h4 className={styles.about}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat
        eleifend leo.
      </h4>
      <PhotoSlider styles={styles.slider} />
      <section className={styles.btnRow}>
        <Button type="submit" text="ONE" />
        <Button type="submit" text="TWO" />
        <Button type="submit" text="THREE" />
      </section>
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
