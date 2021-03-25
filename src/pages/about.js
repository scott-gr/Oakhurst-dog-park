import React from 'react'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import '../pages/styles/aboutpage.module.css'
import { graphql } from 'gatsby'
import AboutPhoto from '../components/CoverPhotos/AboutPhoto.js'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About the Park" />
      <AboutPhoto />
      <main styleName="container">
        {/* <section styleName="aboutContainer"> */}
          <ul styleName="facts">
            <li>Fully fenced-in</li>
            <li>All dogs share one area (no size separation)</li>
            <li>Large, open field for play</li>
            <li>One-third of park is wooded area</li>
            <li>Benches for humans</li>
            <li>Poop bags, water bowls, and tennis balls available</li>
            <li>Water hose outside for rinsing off</li>
            <li>Open 365 days a year</li>
          </ul>
          <article>
            <p>
              Located at 450 E Lake Dr, Decatur, GA 30030, next to the Boys &
              Girls Club. Parking available at Oakhurst Park and Oakhurst
              Presbyterian Church -{' '}
              <i>
                no church parking on Sundays and no parking at the Boys & Girls
                Club.
              </i>
            </p>
            <br></br>
            <p>
              The Oakhurst Dog Park is one of three dog parks in the city of
              Decatur and serves a large community of friendly pets and people.
              We are proud to be the first dog park to be named a wildlife
              sanctuary by the Atlanta Audubon Society. There are several
              birdhouses, bat houses, and a 1300 sqft pollinator garden.
            </p>
          </article>
        {/* </section> */}
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
