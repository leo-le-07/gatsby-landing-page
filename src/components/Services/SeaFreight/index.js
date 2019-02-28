import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import styles from './styles.module.scss'

import ContactInfo from 'components/shared/ContactInfo'

const SeaFreight = ({ siteMetadata }) => {
  const title = 'Sea Freight'
  const thumbnail = '/img/services/example-7.jpg'
  const descriptionList = [
    'Our company offers all types of ocean freight services starting from container carriage up to vessel chartering, Ro-Ro and bulk carriage. With our worldwide network of partners and agents we can deliver you cargo in any destination around the globe. The professional logistics specialists will develop the best solutions and ensure safe door-to-door transportation of our customer cargoes.',
    'Our services links the whole world for the efficiency and comfort of your business.',
  ]
  const contentList = [
    {
      title: 'Our Services Include',
      list: [
        'Full Container Loads (FTL)',
        'Less than container load (LTL)',
        'Dangerous goods transport /ADR',
        'Ro-Ro',
        'Break Bulk',
        'Intermodal Solutions',
        'Customs clearance',
      ],
    },
    {
      title: 'Our Major Responsibilities',
      list: [
        'Applied understanding of local and global import/export regulations and requirements to support business needs.',
        'Prepare import/export related documentation, which may include commercial invoices, export declarations, bills of lading, etc.',
        'Ensure timely and accurate response to Broker Requests for Information and follow up to ensure resolution.',
        'Promote freight forwarding team to arrange and facilitate shipments, including booking, configuration, tracking/tracing, etc.',
        'Maintain and update the order shipment operation to ensure accuracy and completeness of the delivery.',
        'Conduct effective and timely transactional review/audit of all import/export records.',
        'Personally self-educate on the latest local and global Customs and other government agency import regulations.',
      ],
    },
    {
      title: 'Sea Freight (Customer Services)',
      list: [
        'Tel: 03 88 52 72 69 / 0938 864 017',
        'Skype: truonghongthuan1',
        'Zalo: 0388527269',
        'Email: peter@skylinetransport.vn',
      ],
    },
  ]
  return (
    <section className={styles.container}>
      <Content
        siteMetadata={siteMetadata}
        title={title}
        thumbnail={thumbnail}
        descriptionList={descriptionList}
        contentList={contentList}
      />
    </section>
  )
}

export default SeaFreight
