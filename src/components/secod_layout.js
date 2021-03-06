/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from './Footer'

const SecondLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}

export default SecondLayout
