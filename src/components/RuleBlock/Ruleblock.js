import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./ruleblock.module.css"

const Ruleblock = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "rules" } } }
      ) {
        nodes {
          excerpt
          frontmatter {
            rulebrief
            category
            description
          }
        }
      }
    }
  `)
  const rules = data.allMarkdownRemark.nodes.map(rule => (
    <li>
      <header>
        <h3 styleName="ruleBrief" itemProp="headline">
          {rule.frontmatter.rulebrief}
        </h3>
      </header>
      <section>
        <p
          styleName="ruleDesc"
          dangerouslySetInnerHTML={{
            __html: rule.frontmatter.description || rule.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </li>
  ))
  return <ol>{rules}</ol>
}

export default Ruleblock
