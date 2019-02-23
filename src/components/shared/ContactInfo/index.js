import React from 'react'
import styles from './styles.module.scss'

const ContactInfo = ({ address, phone, email, tax, workingTime }) => (
  <div className={styles.container}>
    <p>
      <i className="fa fa-map-marker fa-2x fa-fw" />
      {address}
    </p>
    <p>
      <i className="fa fa-phone fa-2x fa-fw" />
      {phone}
    </p>
    <p>
      <i className="fa fa-envelope fa-2x fa-fw" />
      {email}
    </p>
    <p>
      <i className="fa fa-fax fa-2x fa-fw" />
      {tax}
    </p>
    <p>
      <i className="fa fa-clock-o fa-2x fa-fw" />
      {workingTime}
    </p>
  </div>
)

export default ContactInfo
