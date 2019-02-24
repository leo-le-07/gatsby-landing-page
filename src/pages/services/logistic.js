import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Logistic from 'components/Services/Logistic'

import routes from 'utils/routes'

const LogisticServices = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'logistic services'
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
      link: routes.SERVICE_LOGISTIC,
      name: 'logistic services',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <Logistic siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default LogisticServices

export const pageQuery = graphql`
  query LogisticServicesQuery {
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
