import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import LandFreight from 'components/Services/LandFreight'

import routes from 'utils/routes'

const LandFreightPage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'land freight'
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
    multimodalTransport: {
      link: routes.SERVICE_LAND_FREIGHT,
      name: 'land freight',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <LandFreight siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default LandFreightPage

export const pageQuery = graphql`
  query LandFreightPageQuery {
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
