import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SEO from "../seo.js"
import "./featuredpost.module.css"

const FeaturedPost = () => {
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
            featuredpost
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
    return (
      <>
        <SEO title="Featured Post" />
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
        const featured = post.frontmatter.featuredpost

        if (featured) {
          return (
            <article
              styleName="featuredCard"
              // className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2 styleName="featuredTitle">
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small styleName="featuredDate">{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  styleName="featuredDesc"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          )
        }
      })}
    </>
  )
}

export default FeaturedPost
