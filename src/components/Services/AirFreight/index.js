import React from 'react'
import styles from './styles.module.scss'

import Content from 'components/Services/shared/Content'

const AirFreight = ({ siteMetadata }) => {
  const title = 'Air Freight'
  const thumbnail = '/img/services/example-8.jpg'
  const descriptionList = [
    'Our air freight services provide wholesale solutions for your air cargo needs. Our vast number of different partners and agents for air freight consignments worldwide and our well developed, integrated shipping solutions enables us to transport your cargo anywhere in the world. We offer our customers the services of different top-class airlines.',
    'Whether you have a large cargo to be shipped or goods that need to be transported within a short amount of time, our air freight service will give you the maximum amount of flexibility and efficiency for all your air transportation needs and help you to keep your business run effectively.',
  ]
  const contentList = [
    {
      title: 'Our Major Responsibilities',
      list: [
        'Coordinate and ensure timely bookings with airlines on customer behalf',
        'Prepare import documentation in accordance to government’s requirements an other documents required by the customer',
        'Make sure of timely completion of the export documents and coordinate with both customer and/or warehouse for timely delivery of cargo',
        'Keep communication open with the customer and the overseas supplier in regards to shipment',
        'Follow up with the airline to keep track of departure information and updates',
      ],
    },
    {
      title: 'Air Freight (Customer Services)',
      list: [
        'Tel: (+84) 968 655 099 / (+84) 906 951 203',
        'Skype: phamthuan.jason / vemaybay077',
        'Email: Jason@skylinetransport.vn',
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

export default AirFreight
