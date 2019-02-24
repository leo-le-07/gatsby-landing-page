import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import AirFreight from 'components/Services/AirFreight'

const AirFreightPage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'air freight'
  const breadcrumbs = {
    home: {
      link: '/',
      name: 'home',
      active: false,
    },
    service: {
      link: '/services',
      name: 'our services',
      active: false,
    },
    airFreight: {
      link: '/services/air-freight',
      name: 'air freight',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <AirFreight siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default AirFreightPage

export const pageQuery = graphql`
  query AirFreightPageQuery {
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
