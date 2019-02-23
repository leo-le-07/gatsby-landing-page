import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import styles from './styles.module.scss'

const CustomBreadcumd = ({ title, breadcrumbs }) => (
  <section className={styles.container + ' text-center'}>
    <div className={styles.overlay} />
    <Container>
      <Row>
        <Col lg={12}>
          <h1 className="mb-5">{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Breadcrumb className={styles.breadcrumb}>
            {Object.entries(breadcrumbs).map((element, index) => (
              <Breadcrumb.Item
                key={index}
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

export default CustomBreadcumd
