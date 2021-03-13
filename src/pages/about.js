import React from 'react'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import {aboutContainer, historyText} from '../pages/styles/aboutpage.module.css'
import { graphql } from 'gatsby'
import AboutPhoto from '../components/AboutPhoto/AboutPhoto.js'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <AboutPhoto />

      <main className={aboutContainer}>
        <article className={historyText}>
          <p>
            The Oakhurst Dog Park is one of three dog parks in the city of
            Decatur and is 100% community-maintained. The city provides
            resources, but it’s the park-goers who keep the grounds clean and
            welcoming.
          </p>
          <br></br>
          <p>
            The park features a large open field (a natural flood plain), with
            some shaded areas and benches for visitors. Sitting above the field
            is a wooded area with well-maintained walking paths.
          </p>
          <br></br>
          <p>
            The park was the first dog park to be named a wildlife sanctuary by
            the Atlanta Audubon Society. There are several birdhouses and bat
            houses and a 1300 sqft pollinator garden, where no unnatural
            chemicals are used.
          </p>
        </article>
      </main>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
