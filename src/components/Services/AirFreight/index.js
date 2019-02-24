import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import ContactInfo from 'components/shared/ContactInfo'
import styles from './styles.module.scss'

const AirFreight = ({ siteMetadata }) => (
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
            <Col lg={6}>
              <h2 className={styles.widgetTitle + ' text-primary'}>
                Air Freight
              </h2>
              <p>
                Timing is the essence of Air Freight and our experienced
                Customer Service Team can response quickly to all your air
                enquiry
              </p>
            </Col>
            <Col lg={6}>
              <Image
                src={withPrefix('/img/services/example-8.jpg')}
                alt="testimonials-1"
                rounded
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Jumbotron className={styles.content}>
                <h2 className={styles.title + ' text-primary my-4'}>
                  Proactive customer service
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Direct communication with all involved parties.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Close tracking of cargo movement ensure the most accurate
                      and up-to-minute information
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Same-day service and weekend operation as required
                    </li>
                  </ul>
                </div>
                <h2 className={styles.title + ' text-primary my-4'}>
                  Flexibilit
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      No cargo too small or no cargo too large.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Able to secure the capacity you need, wherever you need it
                      and whenever you need it.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      If your favorite carrier have service, we can offer the
                      best rate.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Airport pick up and delivery service.
                    </li>
                  </ul>
                </div>
              </Jumbotron>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
)

export default AirFreight
