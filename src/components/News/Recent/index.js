import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const Recent = ({ postRemarks }) => {
  return (
    <aside>
      <h1 className="text-primary mb-4">Recent Posts</h1>
      {postRemarks.map((remark, index) => {
        const { thumbnail, title, path } = remark.post.frontmatter
        return (
          <div className={styles.listItems} key={index}>
            <Link
              to={path}
              className={styles.featureImage}
              style={{
                backgroundImage: `url(${thumbnail})`,
              }}
            />
            <div className={styles.content}>
              <p className="lead">
                <Link to={path}>{title}</Link>
              </p>
            </div>
          </div>
        )
      })}
    </aside>
  )
}

export default Recent
