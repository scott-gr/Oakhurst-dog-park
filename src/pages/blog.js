import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import '../pages/styles/blog.module.css'

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
      <SEO title="All posts" />
      <ol styleName="blogList" style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url">
                <article
                  styleName="blogCard"
                  // className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 styleName="blogTitle">
                      <span itemProp="headline">{title}</span>
                    </h2>
                    <small styleName="blogDate">{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      styleName="blogDesc"
                      dangerouslySetInnerHTML={{
                        __html:
                          post.frontmatter.description + '...' || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// allMarkdownRemark(
//   sort: { fields: [frontmatter___date], order: DESC }
//   filter: { fields: { collection: { eq: "blog" } } }
// ) {
//   nodes {
//     excerpt
//     fields {
//       slug
//     }
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//       description
//     }
//   }
// }
// }
