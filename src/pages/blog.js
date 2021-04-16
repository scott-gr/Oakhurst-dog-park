import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import './styles/blog.module.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Blog" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <ol styleName="blogList">
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug} styleName="blogCard">
              {post.frontmatter.image && (
                <Img
                  styleName="blogImg"
                  durationFadeIn={250}
                  alt={post.frontmatter.alt || 'blog cover image'}
                  loading="auto"
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                />
              )}
              <Link to={post.fields.slug} itemProp="url">
                <header styleName="blogTitle" itemProp="headline">
                  {title}
                </header>
                <small>{post.frontmatter.date}</small>{' '}
                <section styleName="blogDesc">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "blog" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          alt
          image {
            childImageSharp {
              fluid(fit: CONTAIN, quality: 80, pngCompressionSpeed: 10) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
