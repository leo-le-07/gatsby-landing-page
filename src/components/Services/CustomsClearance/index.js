import React from 'react'
import styles from './styles.module.scss'

import Content from 'components/Services/shared/Content'

const CustomsClearance = ({ siteMetadata }) => {
  const title = 'Customs Clearance'
  const thumbnail = '/img/services/example-8.jpg'
  const descriptionList = [
    'Skyline supports proper handling of all goods imported to Vietnam and activities at station level or an assigned area. We are responsible for the timely and accurate customs clearance process. We have an experienced and highly motivated team who can:',
  ]
  const contentList = [
    {
      title: 'Our Services Include',
      list: [
        'Plan, implement and supervise operation plan to ensure compliance with Vietnamese Customs regulation',
        'Respond to any deviations of the process and communicate exceptions and resolution suggestions to appropriate management',
        'Frequently interact with team, outside customers, and/or functional peer groups at various management levels. Interaction normally requires the ability to gain cooperation of others and conduct presentations of technical information concerning specific projects/schedules',
        'Monitor and maintain working knowledge of brokerage team work activity, balance capacity and workload, while seeking improvement in the process and team efficiency',
        'Have strong knowledge and understanding of Vietnamese customs policies, interpret Customs regulations to customers for applying correct classification to imported products',
        'Monitor and control the customs brokerage processing to maintain process flows',
        'Ensure the proper use of duty programs resolution when discrepancy is discovered,',
        'Identify areas of needing improvements, report supervisor and collaborate for develop action plans.',
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

export default CustomsClearance
