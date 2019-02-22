import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Header from 'components/shared/Header'
import AboutOurCompany from 'components/AboutOurCompany'

const About = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
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
      <Header title={title} breadcrumbs={breadcrumbs} />
      <AboutOurCompany siteMetadata={siteMetadata} />
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
