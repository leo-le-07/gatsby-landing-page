import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Contact from 'components/Contact'

const ContactPage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'contact'
  const breadcrumbs = {
    home: {
      link: '/',
      name: 'home',
      active: false,
    },
    contact: {
      link: '/contact',
      name: 'contact',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <Contact siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
        companyName
        companyFullName
        email
        address
        phone
        tax
        workingTime
      }
    }
  }
`
