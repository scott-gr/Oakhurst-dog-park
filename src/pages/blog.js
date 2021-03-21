import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import '../pages/styles/blog.module.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFeedFacebookPage.edges.node

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <SEO title="Blog" />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ol styleName="blogList" style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.title      
          return (
            <li key={post.id}>
              <Link to={post.link} itemProp="url">
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
                    <small styleName="blogDate">{post.pubDate}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description + '...' || post.excerpt,
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

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allFeedFacebookPage(sort: { order: DESC, fields: pubDate }) {
      edges {
        node {
          id
          pubDate
          link
          media {
            content {
              attrs {
                url
              }
            }
          }
          content
        }
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
