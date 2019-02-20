import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.scss'

const Testimonials = () => (
  <section className="testimonials text-center">
    <h1 className="mb-5">What people are saying...</h1>
    <Container>
      <Row>
        <Col lg={4} className="testimonial-item mx-auto">
          <Image
            src={withPrefix('/img/testimonials-1.jpg')}
            alt="testimonials-1"
            roundedCircle
          />
          <h5>Margaret E.</h5>
          <p className="font-weight-light mb-0">
            "This is fantastic! Thanks so much guys!"
          </p>
        </Col>
        <Col lg={4} className="testimonial-item mx-auto">
          <Image
            src={withPrefix('/img/testimonials-2.jpg')}
            alt="testimonials-2"
            roundedCircle
          />
          <h5>Fred S.</h5>
          <p className="font-weight-light mb-0">
            "Bootstrap is amazing. I've been using it to create lots of super
            nice landing pages."
          </p>
        </Col>
        <Col lg={4} className="testimonial-item mx-auto">
          <Image
            src={withPrefix('/img/testimonials-3.jpg')}
            alt="testimonials-3"
            roundedCircle
          />
          <h5>Sarah W.</h5>
          <p className="font-weight-light mb-0">
            T"Thanks so much for making these free resources available to us!"
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Testimonials
