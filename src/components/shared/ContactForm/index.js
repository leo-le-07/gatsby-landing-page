import React from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import styles from './styles.module.scss'

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
      <React.Fragment>
        <Form noValidate onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Control
                className={styles.formControl}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Control
                className={styles.formControl}
                type="text"
                placeholder="Subject"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Control
                className={styles.formControl}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Control
                className={styles.formControl}
                type="text"
                placeholder="Phone"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Control
                className={styles.formControl}
                className={styles.textArea}
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
      </React.Fragment>
    )
  }
}

export default ContactForm
