import React from 'react'
import Layout from './src/components/Layout/Layout.js'
import './src/css/style.css'
import './src/css/normalize.css'

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export default wrapPageElement()
