import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './styles.module.scss'

const LandingServices = () => (
  <section className={styles.container + ' text-center text-white'}>
    <div className={styles.overlay} />
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5">Our Services</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div className={styles.feature + ' mx-auto mb-5 mb-lg-0 mb-lg-3'}>
            <div className={styles.featureIcon + ' d-flex'}>
              <i className="fa fa-ship m-auto" />
            </div>
            <h2>Sea Freight</h2>
            <p className="mb-0 text-left">
              <small>
                OUR SERVICES INCLUDE: •Full Container Loads (FTL) •Less than
                container load (LTL) •Dangerous goods transport /ADR •Ro-Ro
                •Break Bulk •Intermodal Solutions •Customs clearance
              </small>
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.feature + ' mx-auto mb-5 mb-lg-0 mb-lg-3'}>
            <div className={styles.featureIcon + ' d-flex'}>
              <i className="fa fa-plane m-auto" />
            </div>
            <h2>Air Freight</h2>
            <p className="mb-0 text-left">
              <small>
                Whether you have a large cargo to be shipped or goods that need
                to be transported within a short amount of time, our air freight
                service will give you the maximum amount of flexibility and
                efficiency for all your air transportation needs.
              </small>
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.feature + ' mx-auto mb-5 mb-lg-0 mb-lg-3'}>
            <div className={styles.featureIcon + ' d-flex'}>
              <i className="fa fa-plane m-auto" />
            </div>
            <h2>Land Freight</h2>
            <p className="mb-0 text-left">
              <small>
                Our company handles each cargo with great care, delivering our
                customers goods safely and on time is our top responsibility.
              </small>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div className={styles.feature + ' mx-auto mb-5 mb-lg-0 mb-lg-3'}>
            <div className={styles.featureIcon + ' d-flex'}>
              <i className="fa fa-truck m-auto" />
            </div>
            <h2>Customs Clearance</h2>
            <p className="mb-0 text-left">
              <small>
                Skyline supports proper handling of all goods imported to
                Vietnam and activities at station level or an assigned area. We
                are responsible for the timely and accurate customs clearance
                process.
              </small>
            </p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.feature + ' mx-auto mb-5 mb-lg-0 mb-lg-3'}>
            <div className={styles.featureIcon + ' d-flex'}>
              <i className="fa fa-fighter-jet m-auto" />
            </div>
            <h2>Sourcing</h2>
            <p className="mb-0 text-left">
              <small>
                We source products for you from qualified supplier, and optimize
                your supply chain.
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default LandingServices
