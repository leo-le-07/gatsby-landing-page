import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Summary from 'components/Services/Summary'

import routes from 'utils/routes'

const Services = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'our services'
  const breadcrumbs = {
    home: {
      link: routes.ROOT,
      name: 'home',
      active: false,
    },
    about: {
      link: routes.SERVICE,
      name: 'our services',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <Summary />
    </Layout>
  )
}

export default Services

export const pageQuery = graphql`
  query ServiceQuery {
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
