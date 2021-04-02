import React from 'react'
import { Link, graphql } from 'gatsby'
import './blogTemplate.module.css'
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
        <section
          styleName="blogBody"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {/* <hr /> */}
        {/* <footer>(Share buttons here)</footer> */}
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
              <span>
                {next.frontmatter.title} - {next.frontmatter.date}{' '}
              </span>
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
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
