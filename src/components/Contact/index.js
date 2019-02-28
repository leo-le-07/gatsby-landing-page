import React from 'react'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import ContactInfo from 'components/shared/ContactInfo'
import ContactForm from 'components/shared/ContactForm'
import styles from './styles.module.scss'

const Contact = ({ siteMetadata }) => (
  <section className={styles.container}>
    <Container>
      <Row className="">
        <Col lg={3}>
          <aside>
            <h2 className={styles.widgetTitle}>Contact</h2>
            <ContactInfo
              address={siteMetadata.address}
              phone={siteMetadata.phone}
              email={siteMetadata.email}
              tax={siteMetadata.tax}
              workingTime={siteMetadata.workingTime}
            />
          </aside>
        </Col>
        <Col lg={9}>
          <Row>
            <Col lg={12}>
              <h2 className={styles.widgetTitle + ' text-primary'}>
                Fill Contact Form
              </h2>
              <p>
                We love to listen and we are eagerly waiting to talk to you
                regarding your project. Get in touch with us if you have any
                queries and we will get back to you as soon as possible.
              </p>
              <ContactForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Contact
