import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import styles from './styles.module.scss'

const Company = ({ siteMetadata }) => (
  <section className={styles.container}>
    <Container>
      <Row className="">
        <Col lg={6} className={styles.featureImage + ' py-5 px-4 px-md-5'} />
        <Col lg={6} className="py-5 px-4 px-md-5">
          <h1 className="mb-5 text-primary">Our Company</h1>
          <p className="text-justify">
            <strong>
              INTERNATIONAL FREIGHT FORWARDING EXPERTISE WITH STRONG TRADITION
              FOR INTRA- ASIA SEA FREIGHT
            </strong>
          </p>
          <p className="text-justify">
            Established in 2010, riding the economic boom, then weathering the
            global downturn, {siteMetadata.companyFullName} is now one of the
            most active international freight forwarder in Vietnam.
          </p>
          <p className="text-justify">
            As Vietnam is an import country, {siteMetadata.companyFullName}{' '}
            started up with import sea freight from ASEAN Region into Ho Chi
            Minh to take the full advantage of the trend. Not limiting
            ourselves, we continuously challenged ourselves. Now,{' '}
            {siteMetadata.companyFullName} can service all 3 seaports and 7
            airports across the country, bringing cargoes from all over the
            world to Vietnam and bringing Vietnam cargoes to the world.
          </p>
          <p className="text-justify">
            Combining our Core products of Sea freight, Air freight and
            Logistics with the expertise and passion of our People, we can
            provide our valued clients and partners with globally integrated and
            tailored solution for all freight and logistics needs.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Company
