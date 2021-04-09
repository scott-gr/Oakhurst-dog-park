import React from 'react'
import { Link, graphql } from 'gatsby'
import './blogTemplate.module.css'
import Img from 'gatsby-image'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-regular-svg-icons'

const BlogTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        styleName="blogCard"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 styleName="blogTitle" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <p styleName="blogDate">{post.frontmatter.date}</p>
        </header>
        {post.frontmatter.image && (
          <Img
            styleName="blogImg"
            durationFadeIn={250}
            loading="eager"
            alt={post.frontmatter.alt || 'blog cover image'}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        )}
        <section
          styleName="blogBody"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav styleName="blognav">
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            <button styleName="blogNavBtn">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} className="fa-2x" />
              {''}
              {previous.frontmatter.title} - {previous.frontmatter.date}
            </button>
          </Link>
        )}

        {next && (
          <Link to={next.fields.slug} rel="next">
            <button styleName="blogNavBtn">
              {next.frontmatter.title} - {next.frontmatter.date}{' '}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="fa-2x" />
            </button>
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogPostBySlug(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }, fields: { collection: { eq: "blog" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        alt
        image {
          childImageSharp {
            fluid(fit: CONTAIN, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD")
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD")
      }
    }
  }
`
