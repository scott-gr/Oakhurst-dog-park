import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import '../pages/styles/blog.module.css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFeedFacebookPage.nodes

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
      <ol styleName="blogList">
        {posts.map((post) => {
          return (
            <li key={post.id} styleName="blogCard">
              <article
                
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2 styleName="blogTitle">
                    <span itemProp="headline">{post.title}</span>
                  </h2>
                  <small styleName="blogDate">{post.pubDate}</small>
                </header>
                <section >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.content,
                    }}
                    itemProp="content"
                    styleName="blogContent"
                  />
                </section>
              </article>
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
    allFeedFacebookPage(sort: {fields: pubDate, order: DESC}) {
      nodes {
        content
        link
        pubDate
        title
        id
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
