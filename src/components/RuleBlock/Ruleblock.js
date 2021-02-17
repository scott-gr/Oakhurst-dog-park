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
  return (
    <>
      {rules.map(rule => {
        const rulebrief = rule.frontmatter.rulebrief
        const category = rule.frontmatter.category
        return (
            <li key={category.toString()}>
              <article
                styleName="ruleCard"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h3 styleName="ruleBrief" itemProp="headline">
                    {rulebrief}
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
            </li>
        )
      })}{" "}
    </>
  )
}

export default Ruleblock

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { fields: { collection: { eq: "rules" } } }
//     ) {
//       nodes {
//         excerpt
//         frontmatter {
//           rulebrief
//           category
//           description
//         }
//       }
//     }
//   }
// `
