import React from 'react'
import { withPrefix } from 'gatsby'
import styles from './styles.module.scss'

import Content from 'components/Services/shared/Content'

const LandFreight = ({ siteMetadata }) => {
  const title = 'Land Freight'
  const thumbnail = '/img/services/example-8.jpg'
  const descriptionList = [
    'Logistics solutions offers you complete solutions for your Road freight consignments. Whether you need Full Truck Loads or Less than Full Truck Loads, containerized cargo deliveries or cargo transportation under temperature control our operations team will offer you an optimized and most cost-effective option.',
    'Our company handles each cargo with great care, delivering our customers goods safely and on time is our top responsibility and offering a service that will leave our partners satisfied is our main priority, every day we strive towards perfection and we can confidently say that we are one of the best in this business.',
  ]
  const contentList = [
    {
      title: 'Our Services Include',
      list: [
        'Domestic and cross-border road freight services',
        'Part & full truck loads (FTL) ',
        'Less than a truck load (LTL)',
        'Dangerous goods transport /ADR',
        'Container loads',
        'Refrigerated',
        'Full container loads (FCL)',
        'Less than container loads (LCL)',
        'Customs clearance',
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

export default LandFreight
