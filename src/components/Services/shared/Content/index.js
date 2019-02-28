import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import styles from './styles.module.scss'

import ServiceList from 'components/Services/shared/ServiceList'
import ContactInfo from 'components/shared/ContactInfo'

const Content = ({
  siteMetadata,
  title,
  thumbnail,
  descriptionList,
  contentList,
}) => (
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
          <Col lg={6}>
            <h2 className={styles.widgetTitle + ' text-primary'}>{title}</h2>
            {descriptionList.map((description, index) => (
              <p className="text-justify" key={index}>
                {description}
              </p>
            ))}
          </Col>
          <Col lg={6}>
            <Image src={withPrefix(thumbnail)} alt="testimonials-1" rounded />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Jumbotron className={styles.content}>
              {contentList.map((content, index) => (
                <ServiceList
                  key={index}
                  title={content.title}
                  contentList={content.list}
                />
              ))}
            </Jumbotron>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

export default Content
