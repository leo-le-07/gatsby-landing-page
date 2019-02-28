import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const Header = ({ path, thumbnail, day, month, year }) => {
  return (
    <Link
      to={path}
      className={styles.thumbnail + ' mb-2'}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div className={styles.metaDate + ' text-white text-center p-2'}>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
        <span className={styles.year}>{year}</span>
      </div>
    </Link>
  )
}

export default Header
