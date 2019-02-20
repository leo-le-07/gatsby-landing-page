import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.scss'

const LandingServices = () => (
  <section className="features-icons bg-light text-left">
    <Container>
      <Row>
        <Col lg={4}>
          <Image
            src="http://pocoexpress.com.vn/wp-content/uploads/2015/06/640x427ximage_900x600_07.jpg.pagespeed.ic.4n8X2Sa1va.webp"
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
            src="http://pocoexpress.com.vn/wp-content/uploads/2015/06/640x427ximage_900x600_03.jpg.pagespeed.ic.bZZOylo5Qo.webp"
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
            src="http://pocoexpress.com.vn/wp-content/uploads/2015/06/640x427ximage_900x600_06.jpg.pagespeed.ic.06zTOkEhV6.webp"
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

export default LandingServices
