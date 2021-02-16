import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import "../pages/styles/rules.module.css"

const RuleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const rules = data.allMarkdownRemark.nodes

  if (rules.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All rules" />
        <p>
          No rules found. Add markdown rules to "content/rules" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All rules" />
      <ol style={{ listStyle: `none` }}>
        {rules.map(rule => {
          const rulebrief = rule.frontmatter.rulebrief || rule.fields.slug
          const category = rule.frontmatter.category
          return (
            <li key={rulebrief}>
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
        })}
      </ol>
    </Layout>
  )
}

export default RuleIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
`
