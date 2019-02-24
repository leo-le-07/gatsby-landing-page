import React from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { default as ContactFormShared } from 'components/shared/ContactForm'
import styles from './styles.module.scss'

const ContactForm = () => (
  <section className={styles.container + ' text-center'}>
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5">Request A Quick Quote</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 2, span: 8, offset: 2 }}>
          <ContactFormShared />
        </Col>
      </Row>
    </Container>
  </section>
)

export default ContactForm
