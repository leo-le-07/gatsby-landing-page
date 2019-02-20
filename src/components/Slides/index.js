import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.scss'

const Slides = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://pocoexpress.com.vn/wp-content/uploads/2016/05/xslide-02.jpg.pagespeed.ic.CNXiWRovo2.webp"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://pocoexpress.com.vn/wp-content/uploads/2016/05/xslide-03.jpg.pagespeed.ic.wyxQ41yyud.webp"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://pocoexpress.com.vn/wp-content/uploads/2016/05/xslide-01.jpg.pagespeed.ic.abh-JAOD8E.webp"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Slides
