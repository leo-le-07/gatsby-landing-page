import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Header from 'components/News/Header'
import Recent from 'components/News/Recent'

import routes from 'utils/routes'

const NewsTemplate = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const {
    category,
    tags,
    description,
    title,
    path,
    date,
    image,
    thumbnail,
  } = data.markdownRemark.frontmatter
  const breadcrumbs = {
    home: {
      link: routes.ROOT,
      name: 'home',
      active: false,
    },
    news: {
      link: routes.NEWS,
      name: 'news',
      active: false,
    },
    details: {
      link: path,
      name: title,
      active: true,
    },
  }
  const html = get(data, 'markdownRemark.html')
  const recentPostRemarks = get(data, 'recent.posts')
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <section>
        <Container>
          <Row>
            <Col lg={8}>
              <Header
                path={path}
                thumbnail={thumbnail}
                day="07"
                month="February"
                year="2019"
              />
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Col>
            <Col lg={4}>
              <Recent postRemarks={recentPostRemarks} />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default NewsTemplate

export const pageQuery = graphql`
  query($path: String!) {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        title
        category
        thumbnail
        image {
          id
        }
      }
    }
    recent: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "news" } } }
      limit: 5
    ) {
      posts: edges {
        post: node {
          frontmatter {
            title
            path
            category
            thumbnail
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
