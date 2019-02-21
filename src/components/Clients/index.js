import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.scss'

const Clients = () => (
  <section className="text-center bg-light">
    <h1 className="mb-5">Our Clients</h1>
    <Container>
      <Row>
        <Col lg={2} className="logo-wrapper">
          <div className="logo">
            <Image
              src="https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase-lite/wp-content/uploads/2016/11/logo-10.png"
              rounded
            />
          </div>
        </Col>
        <Col lg={2} className="logo-wrapper">
          <div className="logo">
            <Image
              src="https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase-lite/wp-content/uploads/2016/11/logo-9.png"
              rounded
            />
          </div>
        </Col>
        <Col lg={2} className="logo-wrapper">
          <div className="logo">
            <Image
              src="https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase-lite/wp-content/uploads/2016/11/logo-12.png"
              rounded
            />
          </div>
        </Col>
        <Col lg={2} className="logo-wrapper">
          <div className="logo">
            <Image
              src="https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase-lite/wp-content/uploads/2016/11/logo-8.png"
              rounded
            />
          </div>
        </Col>
        <Col lg={2} className="logo-wrapper">
          <div className="logo">
            <Image
              src="https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase-lite/wp-content/uploads/2016/11/logo-11.png"
              rounded
            />
          </div>
        </Col>
        <Col lg={2} className="logo-wrapper">
          <div className="logo">
            <Image
              src="https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase-lite/wp-content/uploads/2016/11/logo-2.png"
              rounded
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Clients
