import React from 'react'
import styles from './styles.module.scss'

import Content from 'components/Services/shared/Content'

const SeaFreight = ({ siteMetadata }) => {
  const title = 'Sourcing'
  const thumbnail = '/img/services/example-4.jpg'
  const descriptionList = [
    'We source products for you from qualified supplier, and optimize your supply chain.',
  ]
  const contentList = [
    {
      title: 'Our Services Include',
      list: [
        'Control the Risk: We help you to screen supplier by visiting them onsite, we help you to enhance communication efficiency with supplier.',
        'Solve the problem: We anticipate and resolve the unforeseen problems throughout the process, we help you avoid the headache of dealing with too many supplier that you might have problem with.',
        'Save time and money: We works on behalf of your business to save your time and money, we find the right suppliers and negotiate with them in person to get you the best quality products at the best price. Under knowledge about Logistic term, we help you to have the best Purchasing solution.',
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
