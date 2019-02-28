import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Summary from 'components/News/Summary'
import Recent from 'components/News/Recent'

import routes from 'utils/routes'

const NewsPage = ({ data, location }) => {
  const siteMetadata = get(data, 'site.meta')
  const title = 'news'
  const breadcrumbs = {
    home: {
      link: routes.ROOT,
      name: 'home',
      active: false,
    },
    news: {
      link: routes.NEWS,
      name: 'news',
      active: true,
    },
  }
  const postRemarks = get(data, 'remark.posts')
  const recentPostRemarks = get(data, 'recent.posts')

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <section>
        <Container>
          <Row>
            <Col lg={8}>
              {postRemarks.map(({ post }, i) => (
                <Summary postRemark={post} key={i} />
              ))}
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

export default NewsPage

export const pageQuery = graphql`
  query NewsPageQuery {
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
      filter: { frontmatter: { category: { eq: "news" } } }
    ) {
      posts: edges {
        post: node {
          html
          excerpt(pruneLength: 250)
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            thumbnail
            date(formatString: "YYYY/MM/DD")
            image {
              id
            }
          }
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
