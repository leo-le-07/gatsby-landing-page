import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Sourcing from 'components/Services/Sourcing'

import routes from 'utils/routes'

const SourcingPage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'sourcing'
  const breadcrumbs = {
    home: {
      link: routes.ROOT,
      name: 'home',
      active: false,
    },
    service: {
      link: routes.SERVICE,
      name: 'our services',
      active: false,
    },
    sourcing: {
      link: routes.SERVICE_SOURCING,
      name: 'sourcing',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <Sourcing siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default SourcingPage

export const pageQuery = graphql`
  query SourcingPageQuery {
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
