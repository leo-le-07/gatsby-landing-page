import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Multimodal from 'components/Services/Multimodal'

import routes from 'utils/routes'

const MultimodalTransport = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'multimodal transport'
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
      link: routes.SERVICE_MULTIMODAL,
      name: 'multimodal transport',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <Multimodal siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default MultimodalTransport

export const pageQuery = graphql`
  query MultimodalTransportQuery {
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
