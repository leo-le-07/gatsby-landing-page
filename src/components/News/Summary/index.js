import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

import ReadMore from 'components/shared/ReadMore'
import Header from 'components/News/Header'

const Summary = ({ postRemark }) => {
  const {
    category,
    tags,
    title,
    path,
    date,
    image,
    thumbnail,
  } = postRemark.frontmatter

  const html = get(postRemark, 'html')
  const description = get(postRemark, 'excerpt')
  return (
    <div className={styles.container + ' mb-5'}>
      <Header
        path={path}
        thumbnail={thumbnail}
        day="07"
        month="February"
        year="2019"
      />
      <h1>{title}</h1>
      <div className={styles.content + ' mb-2'}>{description}</div>
      <ReadMore path={path} />
    </div>
  )
}

export default Summary
