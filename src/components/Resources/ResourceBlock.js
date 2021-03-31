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
            content
          }
        }
      }
    }
  `)

  const resources = data.allMarkdownRemark.nodes.map((resource) => (
    <div styleName="resourceCard">
      <header>
        <h5 styleName="resourceName" itemProp="headline">
          {resource.frontmatter.name}
        </h5>
      </header>
      <section styleName="resourceContent">
        <p
          dangerouslySetInnerHTML={{
            __html: resource.frontmatter.content || resource.excerpt,
          }}
          itemProp="content"
        />
      </section>
    </div>
  ))
  return <ol> {resources} </ol>
}

export default ResourceBlock
