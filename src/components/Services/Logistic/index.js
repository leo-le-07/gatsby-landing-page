import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import ContactInfo from 'components/shared/ContactInfo'
import styles from './styles.module.scss'

const Logistic = ({ siteMetadata }) => (
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
                General Transportation
              </h2>
              <p>You give us the places, we make the move. It’s that simple</p>
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
                  Total Logistics Solution
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Full range pick –up and delivery service
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Organizing consolidating from multiple suppliers
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Packaging and labeling as your instruction
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Full accountability of cargo till delivere
                    </li>
                  </ul>
                </div>
                <h2 className={styles.title + ' text-primary my-4'}>
                  Customs Consultation and Clearance Service
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Experienced documentation team to handle sensitive and
                      detail-oriented trading document (LC, CO, Packing,
                      Invoice, Contract)
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Reliable global agency network with local expertise
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Flexible solution for all form of import and export –
                      personal effect, government project, commercial cargo,
                      non-commercial cargo, temporary import-export, exhibition…
                    </li>
                  </ul>
                </div>
                <h2 className={styles.title + ' text-primary my-4'}>
                  Full Cost Control
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      No-surprise, no-hidden cost.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      All-in quotation for multiple services.
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

export default Logistic
