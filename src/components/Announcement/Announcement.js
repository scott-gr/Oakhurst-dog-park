import React from "react"

const Announcement = () => {
  return (
    <article
      className={styles.blogCard}
      // className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2 className={styles.blogTitle}>
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small className={styles.blogDate}>{post.frontmatter.date}</small>
      </header>
      <section>
        <p
          className={styles.blogDesc}
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  )
}

export default Announcement
