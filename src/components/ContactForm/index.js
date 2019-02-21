import React from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import './style.scss'

class ContactForm extends React.Component {
  constructor(...props) {
    super(...props)

    this.state = {
      showConfirm: false,
    }
  }

  handleSubmit = event => {
    const form = event.currentTarget
    event.preventDefault()
    this.setState({
      showConfirm: true,
    })
  }

  handleClose = () => {
    this.setState({ showConfirm: false })
  }

  render() {
    const { validated, showConfirm } = this.state

    return (
      <section className="contact text-center">
        <h1 className="mb-5">Request A Quick Quote</h1>
        <Container>
          <Row>
            <Col md={{ offset: 2, span: 8, offset: 2 }}>
              <Form noValidate onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Control type="text" placeholder="Phone" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="12">
                    <Form.Control
                      className="text-area"
                      as="textarea"
                      rows="40"
                      placeholder="Message"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="text-center">
                  <Form.Group as={Col} md="12">
                    <Button type="submit">Send Message</Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
        <Modal show={showConfirm} onHide={this.handleClose}>
          <Modal.Body>
            Your message has been received. We'll contact you soon.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }
}

export default ContactForm
