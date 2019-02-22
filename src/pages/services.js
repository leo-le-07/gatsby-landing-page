import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Header from 'components/shared/Header'

const Services = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  const siteMetadata = get(data, 'site.meta')
  const title = 'our services'
  const breadcrumbs = {
    home: {
      link: '/',
      name: 'home',
      active: false,
    },
    about: {
      link: '/services',
      name: 'our services',
      active: true,
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <Header title={title} breadcrumbs={breadcrumbs} />
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
