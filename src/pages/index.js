import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Slides from 'components/Slides'
import LandingWhyChooseUs from 'components/LandingWhyChooseUs'
import Testimonials from 'components/Testimonials'
import Clients from 'components/Clients'
import ContactForm from 'components/ContactForm'
import LandingAbout from 'components/LandingAbout'
import LandingServices from 'components/LandingServices'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  const siteMetadata = get(data, 'site.meta')
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <Slides />
      <LandingWhyChooseUs />
      <LandingServices />
      <ContactForm />
      <LandingAbout siteMetadata={siteMetadata} />
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
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
