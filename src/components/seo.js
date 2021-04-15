import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, title, image, lang }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultLang,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    lang: lang || defaultLang,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{
        lang,
      }} image={seo.image}
    >
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}
export default SEO

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  lang: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: `https://oakhurstdogpark.com/social-preview.png`,
  lang: `en`,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl: url
      }
    }
  }
`
