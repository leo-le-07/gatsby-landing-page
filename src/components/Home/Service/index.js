import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withPrefix } from 'gatsby'
import './style.scss'

const LandingServices = () => (
  <section className="services text-center text-white">
    <div className="overlay" />
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5">Our Services</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i className="fa fa-ship m-auto" />
            </div>
            <h2>Sea Freight</h2>
            <p class="mb-0 text-left">
              <small>
                With good agent systems in main sea ports all over the world and
                good partners in famous shipping lines, POCO EXPRESS provides
                the sea freight services at the competitive rates. We can manage
                to avoid off load shipment at departure port or transit port.
                Trucks are available for domestic transportation.
              </small>
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i className="fa fa-plane m-auto" />
            </div>
            <h2>Air Freight</h2>
            <p class="mb-0 text-left">
              <small>
                Timing is the essence of Air Freight and our experienced
                Customer Service Team can response quickly to all your air
                enquiry.
              </small>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i className="fa fa-truck m-auto" />
            </div>
            <h2>Multimodal Transport</h2>
            <p class="mb-0 text-left">
              <small>
                We choose the most cost-effective combination transport modes
                for your destination.
              </small>
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i className="fa fa-fighter-jet m-auto" />
            </div>
            <h2>Logistics Services</h2>
            <p class="mb-0 text-left">
              <small>
                You give us the places, we make the move. It’s that simple.
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default LandingServices
