import React from "react"
import { graphql } from "gatsby"
import styles from "./announcementTemplate.module.css"
import Layout from "../../components/Layout/Layout.js"
import SEO from "../../components/seo.js"

const AnnouncementTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={styles.Card}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className={styles.announceTitle} itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <p className={styles.announceDate}>{post.frontmatter.date}</p>
        </header>
        <section
          className={styles.announceBody}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>(Share buttons here)</footer>
      </article>
      {/* <nav className={styles.blognav}>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default AnnouncementTemplate

export const pageQuery = graphql`
  query AnnouncementBySlug(
    $id: String!
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
  }
`
