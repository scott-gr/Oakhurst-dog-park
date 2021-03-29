import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './rules.module.css'

const RuleBlock = (props) => {
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
    .filter(
      (rule) =>
        rule.frontmatter.category.toLowerCase() === props.category.toLowerCase()
    )
    .map((rule) => (
      <div styleName="ruleCard">
        <header>
          <h5 styleName="ruleBrief" itemProp="headline">
            {rule.frontmatter.rulebrief}
          </h5>
        </header>
        <section styleName="ruleDesc">
          <p
            dangerouslySetInnerHTML={{
              __html: rule.frontmatter.description || rule.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </div>
    ))
  return (
    <ol
    //  styleName="ruleList"
    >
      {rules}
    </ol>
  )
}

export default RuleBlock
