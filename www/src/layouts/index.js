import PropTypes from 'prop-types'
import React from 'react'

import Page from './Page'
import ApiPage from './ApiPage'
import LandingPage from './LandingPage'

import '../styles/docs.less'

const propTypes = {
  location: PropTypes.object.isRequired,
}

function getLayout(pathname) {
  if (pathname === '/react-widgets/' || pathname === '/') {
    return LandingPage
  } else if (pathname.includes('/api')) {
    return ApiPage
  }
  return Page
}

function Layout({ location, ...props }) {
  let Component = getLayout(location.pathname)
  return <Component {...props} location={location} />
}

Layout.propTypes = propTypes

export default Layout
