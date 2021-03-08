import './src/css/style.css'
import './src/css/normalize.css'
import React from 'react'
import Layout from "./src/components/Layout/Layout.js"

const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

export default wrapPageElement