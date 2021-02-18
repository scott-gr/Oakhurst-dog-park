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
  const rules = data.allMarkdownRemark.nodes
  const ruleItems = rules.map(rule => (
    <ruleItem
      key={rule.frontmatter.category.toString()}
      value={rule.frontmatter.category}
    >
      <article
        styleName="ruleCard"
        itemScope
        itemType="http://schema.org/Article"
      >
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
      </article>
    </ruleItem>
  ))
  return (
    <ol>
      {ruleItems}
    </ol>
  )
}


export default Ruleblock
