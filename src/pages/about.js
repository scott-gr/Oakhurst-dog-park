import React from 'react'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import '../pages/styles/aboutpage.module.css'
import { graphql } from 'gatsby'
import AboutPhoto from '../components/AboutPhoto/AboutPhoto.js'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <AboutPhoto />
      <main styleName="container">
        <aside styleName="aboutBrief">
          <p>
            Located at 450 E Lake Dr, Decatur, GA 30030, next to the Boys &
            Girls Club. Parking available at Oakhurst Park and Oakhurst
            Presbyterian Church -{' '}
            <i>
              no church parking on Sundays and no parking at the Boys & Girls
              Club.
            </i>
          </p>
        </aside>
        <section styleName="aboutContainer">
          <ul styleName="facts"> 
            <li>Fully fenced-in</li>
            <li>All dogs share one area (no size separation)</li>
            <li>Large, open field for play</li>
            <li>One-third of park is wooded area</li>
            <li>Benches for humans</li>
            <li>Open 365 days a year</li>
          </ul>
          <article>
            <p>
              The Oakhurst Dog Park is one of three dog parks in the city of
              Decatur and is 100% community-maintained. The city provides
              resources, but it’s the park-goers who keep the grounds clean and
              welcoming.
            </p>
            <br></br>
            <p>
              We are proud to be first dog park to be named a wildlife sanctuary
              by the Atlanta Audubon Society. There are several birdhouses and
              bat houses and a 1300 sqft pollinator garden, where no unnatural
              chemicals are used.
            </p>
          </article>
        </section>
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
