import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import styles from './styles.module.scss'

const Summary = ({ siteMetadata }) => (
  <section className={styles.container}>
    <Container>
      <Row className="">
        <Col lg={3}>
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
          <Button variant="primary" href="/services/sea-freight">
            Read More
          </Button>
        </Col>
        <Col lg={3}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-2.jpg')}
            rounded
          />
          <h3>Air Freight</h3>
          <p className="lead">
            Timing is the essence of Air Freight and our experienced Customer
            Service Team can response quickly to all your...
          </p>
          <Button variant="primary" href="/services/air-freight">
            Read More
          </Button>
        </Col>
        <Col lg={3}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-3.jpg')}
            rounded
          />
          <h3>Multimodal Transport</h3>
          <p className="lead">
            We choose the most cost-effective combination transport modes for
            your destination. Full accessibility to....
          </p>
          <Button variant="primary" href="/services/multimodal-transport">
            Read More
          </Button>
        </Col>
        <Col lg={3}>
          <Image
            className="img-thumbnail"
            src={withPrefix('/img/services/example-3.jpg')}
            rounded
          />
          <h3>Logistics Services</h3>
          <p className="lead">
            You give us the places, we make the move. It’s that simple. Total
            logistics solution. Customs consultation...
          </p>
          <Button variant="primary" href="/services/logistic">
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Summary
