const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const NewsTemplate = path.resolve('./src/templates/News/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              newsList: edges {
                news: node {
                  excerpt(pruneLength: 250)
                  html
                  id
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
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
        data.allMarkdownRemark.newsList.forEach(({ news }) => {
          const { path } = news.frontmatter
          createPage({
            path,
            component: NewsTemplate,
            context: {
              path,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
