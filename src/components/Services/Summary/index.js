import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import styles from './styles.module.scss'

import ReadMore from 'components/shared/ReadMore'

import routes from 'utils/routes'

const Summary = ({ siteMetadata }) => (
  <section className={styles.container}>
    <Container>
      <Row className="mb-5">
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-1.jpg')}
            rounded
          />
          <h3>Sea Freight</h3>
          <p className="lead">
            With good agent systems in main sea ports all over the world and
            good partners in famous shipping lines,...
          </p>
          <ReadMore path={routes.SERVICE_SEA_FREIGHT} />
        </Col>
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-2.jpg')}
            rounded
          />
          <h3>Air Freight</h3>
          <p className="lead">
            Whether you have a large cargo to be shipped or goods that need to
            be transported within a short amount of time, our air freight ...
          </p>
          <ReadMore path={routes.SERVICE_AIR_FREIGHT} />
        </Col>
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-3.jpg')}
            rounded
          />
          <h3>Land Freight</h3>
          <p className="lead">
            Our company handles each cargo with great care, delivering our
            customers goods safely and on time is our top responsibility.
          </p>
          <ReadMore path={routes.SERVICE_LAND_FREIGHT} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-4.jpg')}
            rounded
          />
          <h3>Customs Clearance</h3>
          <p className="lead">
            Skyline supports proper handling of all goods imported to Vietnam
            and activities at station level or an assigned area. We are ...
          </p>
          <ReadMore path={routes.SERVICE_CUSTOMS_CLEARANCE} />
        </Col>
        <Col lg={4}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-5.jpg')}
            rounded
          />
          <h3>Sourcing</h3>
          <p className="lead">
            We source products for you from qualified supplier, and optimize
            your supply chain.
          </p>
          <ReadMore path={routes.SERVICE_SOURCING} />
        </Col>
      </Row>
    </Container>
  </section>
)

export default Summary
