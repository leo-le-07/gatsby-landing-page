import React from 'react'
import styles from './styles.module.scss'

const ServiceList = ({ title, contentList }) => {
  return (
    <React.Fragment>
      <h2 className={styles.title + ' text-primary my-4'}>{title}</h2>
      <div className={styles.list}>
        <ul className="p-0 fa-ul">
          {contentList.map((content, index) => (
            <li className="mb-2 lead" key={index}>
              <span className="fa-li">
                <i className="fa fa-share" />
              </span>
              {content}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ServiceList
