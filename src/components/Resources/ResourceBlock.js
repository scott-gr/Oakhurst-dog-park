import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './resourcesblock.module.css'

const ResourceBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "resources" } } }
      ) {
        nodes {
          excerpt
          frontmatter {
            name
            comment
            link
          }
        }
      }
    }
  `)

  const resources = data.allMarkdownRemark.nodes.map((resource) => (
    <div styleName="resourceCard">
      <header styleName="resourceName" itemProp="headline">
        {resource.frontmatter.name}
      </header>
      <section styleName="resourceContent">
        <a href={resource.frontmatter.link}>{resource.frontmatter.link}</a>
        <p
          dangerouslySetInnerHTML={{
            __html: resource.frontmatter.comment,
          }}
          itemProp="comment"
        />
      </section>
    </div>
  ))
  return <ol> {resources} </ol>
}

export default ResourceBlock
