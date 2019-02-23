import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/shared/Navi'
import Footer from 'components/shared/Footer'
import { siteMetadata } from '../../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import 'scss/index.scss'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Navi siteMetadata={siteMetadata} {...this.props} />
        {children}
        <Footer siteMetadata={siteMetadata} />
      </div>
    )
  }
}

export default Layout
