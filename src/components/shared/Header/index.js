import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import './style.scss'

const Header = ({ title, breadcrumbs }) => (
  <section className="header text-center">
    <div className="overlay" />
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5">{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Breadcrumb>
            {Object.entries(breadcrumbs).map(element => (
              <Breadcrumb.Item
                active={element[1]['active']}
                href={element[1]['link']}
              >
                {element[1]['name']}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Header
