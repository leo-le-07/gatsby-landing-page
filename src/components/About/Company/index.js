import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import styles from './styles.module.scss'

const Company = ({ siteMetadata }) => (
  <section className={styles.container}>
    <Container>
      <Row className="">
        <Col lg={6} className={styles.featureImage + ' py-5 px-4 px-md-5'} />
        <Col lg={6} className="py-5 px-4 px-md-5">
          <h1 className="mb-5 text-primary">Who We Are?</h1>
          <p className="text-justify">
            <strong>
              {siteMetadata.companyName} has been established in 2016 with an
              ambitious to be one of the top professional Freight Forwarders in
              Vietnam provide a wide range of professional services to
              customers.
            </strong>
          </p>
          <p className="text-justify">
            As a local and global forwarding agent, {siteMetadata.companyName}{' '}
            has the opportunity to directly support customer supply chains by
            helping to move their freight efficiently and effectively. We
            interact directly with customers and suppliers to build and
            strengthen relationships with them. We thrive in a fast paced
            environment while working to provide best-in-class customer service
            and problem resolution.
          </p>
          <p className="text-justify">
            The main business includes Sea, Air, Land, Multi-modals, Storage,
            Warehousing, re-Packing, 3rd-party Inspection, Customs Clearance,
            Sourcing, manufacturing,
          </p>
          <p className="text-justify">
            From the day of establishment, {siteMetadata.companyName} keeps
            'Customer First , Service First' as its managing philosophy in all
            business activities. It is not only a provider of forwarder &
            logistics but also an advisor to help clients to save time and cost
            too.
          </p>
          <p className="text-justify">
            Highly professional staff and proper management ensured quick growth
            of the company and good recognition among international partners and
            customers.
          </p>
          <p className="text-justify">
            Welcome to contact with {siteMetadata.companyName} anytime &
            anywhere.
          </p>
          <p className="text-justify">
            The suggestion and claim mail is {siteMetadata.email}
          </p>
          <p className="text-justify">Our advantages:</p>
          <ul>
            <li>Quick response on customer demands</li>
            <li>Operational staff available 24/7</li>
            <li>Cost-efficient pricing</li>
            <li>Service provided by experienced staff</li>
            <li>Customer-oriented</li>
            <li>Company with dedicated project division</li>
            <li>Special Cargo Insurance Package</li>
          </ul>
        </Col>
      </Row>
      <Row className="">
        <Col lg={12} className="py-5 px-4 px-md-5">
          <h1 className="mb-5 text-primary">Core Value</h1>
          <p className="text-justify">
            Skyline has a strong foundation of core values that guides the way
            we do business.
          </p>
          <p className="text-justify">
            <strong>Integrity</strong>
          </p>
          <p className="text-justify">
            Inspiring trust and confidence through maintaining ethical and
            professional standards, saying what we mean, doing what we say, and
            taking responsibility for our actions.
          </p>
          <p className="text-justify">
            <strong>Results Focused</strong>
          </p>
          <p className="text-justify">
            Striving to deliver on our commitments with our client’s needs in
            mind, on time, and to the highest standard.
          </p>
          <p className="text-justify">
            <strong>Openness</strong>
          </p>
          <p className="text-justify">
            Fostering a collaborative way of working through information
            sharing, actively listening, and giving constructive challenge.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Company
