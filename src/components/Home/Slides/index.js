import React from 'react'
import { withPrefix } from 'gatsby'
import { Carousel } from 'react-bootstrap'
import styles from './styles.module.scss'

const data = [
  {
    imagePath: '/img/landing_carousel/example-1.jpg',
    altText: 'Carousel',
    title: '',
    description: '',
  },
  {
    imagePath: '/img/landing_carousel/example-2.jpg',
    altText: 'Carousel',
    title: '',
    description: '',
  },
  {
    imagePath: '/img/landing_carousel/example-3.jpg',
    altText: 'Carousel',
    title: '',
    description: '',
  },
]

const Slides = () => (
  <Carousel>
    {data.map((item, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={withPrefix(item.imagePath)}
          alt={item.altText}
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
)

export default Slides
