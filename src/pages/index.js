import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import Slides from 'components/Home/Slides'
import WhyUs from 'components/Home/WhyUs'
import Testimonials from 'components/Home/Testimonials'
import Clients from 'components/Home/Clients'
import ContactForm from 'components/Home/ContactForm'
import About from 'components/Home/About'
import Service from 'components/Home/Service'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  const siteMetadata = get(data, 'site.meta')
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <Slides />
      <WhyUs />
      <Service />
      <ContactForm />
      <About siteMetadata={siteMetadata} />
      <Testimonials />
      <Clients />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
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
