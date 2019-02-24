import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import SeaFreight from 'components/Services/SeaFreight'

import routes from 'utils/routes'

const SeaFreightPage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'sea freight'
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
    seaFreight: {
      link: routes.SERVICE_SEA_FREIGHT,
      name: 'sea freight',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <SeaFreight siteMetadata={siteMetadata} />
    </Layout>
  )
}

export default SeaFreightPage

export const pageQuery = graphql`
  query SeaFreightPageQuery {
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
