import React from 'react'
import styles from './styles.module.scss'

const ContactInfo = ({ siteMetadata }) => (
  <div className={styles.container}>
    <p>
      <i className="fa fa-map-marker fa-2x fa-fw" />
      {siteMetadata.address}
    </p>
    <p>
      <i className="fa fa-phone fa-2x fa-fw" />
      {siteMetadata.phone}
    </p>
    <p>
      <i className="fa fa-envelope fa-2x fa-fw" />
      {siteMetadata.email}
    </p>
    <p>
      <i className="fa fa-fax fa-2x fa-fw" />
      {siteMetadata.tax}
    </p>
    <p>
      <i className="fa fa-clock-o fa-2x fa-fw" />
      {siteMetadata.workingTime}
    </p>
  </div>
)

export default ContactInfo
