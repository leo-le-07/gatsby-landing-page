import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './styles.module.scss'

import ReadMore from 'components/shared/ReadMore'

import routes from 'utils/routes'

const About = ({ siteMetadata }) => (
  <section className={styles.container + ' bg-light text-left'}>
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5 text-center">About Us</h1>
          <h3>Welcome to {siteMetadata.companyFullName}</h3>
          <p className="lead">
            We, <strong>{siteMetadata.companyFullName}</strong>. With more than
            10 years of experiences in shipping and international freight
            forwarding for management team. We have continuously developed new
            services, improved quality services. Besides, we have good
            relationship with the Air lines, Shipping lines so that we will
            offer you tailored solutions and services to meet your increasing
            demands at the soonest possible.
          </p>
          <p className="lead">
            Should you have futher inquiries regarding company information,
            corporate tax consultant, freight forwarding or international
            business, please don’t hesitate to contact us or email to
            {siteMetadata.email} for customized solution and services to your
            business requirement
          </p>
          <ReadMore path={routes.ABOUT} />
        </Col>
      </Row>
    </Container>
  </section>
)

export default About
