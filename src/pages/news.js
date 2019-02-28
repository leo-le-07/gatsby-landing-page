import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Meta from 'components/shared/Meta'
import Layout from 'components/shared/Layout'
import CustomBreadcumd from 'components/shared/CustomBreadcumd'
import Summary from 'components/News/Summary'

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
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} />
      <CustomBreadcumd title={title} breadcrumbs={breadcrumbs} />
      <section>
        <Container>
          <Col lg={{ span: 9 }}>
            {posts.map(({ post }, i) => (
              <Summary
                data={post}
                options={{
                  isIndex: true,
                }}
                key={i}
              />
            ))}
          </Col>
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
  }
`
