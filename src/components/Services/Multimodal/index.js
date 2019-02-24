import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import ContactInfo from 'components/shared/ContactInfo'
import styles from './styles.module.scss'

const Multimodal = ({ siteMetadata }) => (
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
                Multimodal Transport
              </h2>
              <p>
                We choose the most cost-effective combination transport modes
                for your destination
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
                  Transport service to Combodia via Ho Chi Minh
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Multiple transport mode combination for FCL and cargo to
                      Cambodia via Ho Chi Minh
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Experience trucking and custom handling across border
                    </li>
                  </ul>
                </div>
                <h2 className={styles.title + ' text-primary my-4'}>
                  Full accessibility to landlocked countries
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      HO CHI MINH – BREMENHAVEN – BRUNTAL
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      HO CHI MINH – KOPER/HAMBURG – GMÜND
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      HO CHI MINH – KOPER – BUDAPEST
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      HO CHI MINH – XINGANG – INNER MOGOLIA
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

export default Multimodal
