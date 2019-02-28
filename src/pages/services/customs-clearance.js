import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import CustomsClearance from 'components/Services/CustomsClearance'

import routes from 'utils/routes'

const CustomsClearancePage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'customs clearance'
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
    logistic: {
      link: routes.SERVICE_CUSTOMS_CLEARANCE,
      name: 'customs clearance',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <CustomsClearance siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default CustomsClearancePage

export const pageQuery = graphql`
  query CustomsClearancePageQuery {
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
