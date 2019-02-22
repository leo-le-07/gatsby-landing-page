import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { withPrefix } from 'gatsby'
import './style.scss'

const LandingWhyChooseUs = () => (
  <section className="services bg-light text-left">
    <Container>
      <Row>
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-1.jpg')}
            rounded
          />
          <h3>About Transport</h3>
          <p className="lead mb-0">
            Transport began providing transportation solutions to Transport’s
            contract warehousing customers in the 1980s.
          </p>
        </Col>
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-2.jpg')}
            rounded
          />
          <h3>Best Warehousing</h3>
          <p className="lead mb-0">
            Transport provides warehousing, fulfillment services, and
            transportation management across North America.
          </p>
        </Col>
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-3.jpg')}
            rounded
          />
          <h3>Why Choose Us?</h3>
          <p className="lead mb-0">
            With over 60 years of experience, we understand what a vital role we
            play for our customers.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default LandingWhyChooseUs
