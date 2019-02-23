import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Company from 'components/About/Company'

const About = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'about us'
  const breadcrumbs = {
    home: {
      link: '/',
      name: 'home',
      active: false,
    },
    about: {
      link: '/about',
      name: 'about us',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <Company siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
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
      }
    }
  }
`
