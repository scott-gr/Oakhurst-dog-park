import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SEO from "../seo.js"
import styles from "./announcement.module.css"

const Announcement = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`)
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
    return (
      <>
        <SEO title="Announcements" />
        <p>
          No announcements found. Add markdown posts to "content/announcements"
          (or the directory you specified for the "gatsby-source-filesystem"
          plugin in gatsby-config.js).
        </p>
      </>
    )
  }
  return (
    <>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <article
            className={styles.announcementCard}
            // className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2 className={styles.announcementTitle}>
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <small className={styles.announcementDate}>
                {post.frontmatter.date}
              </small>
            </header>
            <section>
              <p
                className={styles.announcementDesc}
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        )
      })}
    </>
  )
}

export default Announcement


