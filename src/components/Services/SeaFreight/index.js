import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import ContactInfo from 'components/shared/ContactInfo'
import styles from './styles.module.scss'

const SeaFreight = ({ siteMetadata }) => (
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
                Sea Freight
              </h2>
              <p>
                With good agent systems in main sea ports all over the world and
                good partners in famous shipping lines,{' '}
                {siteMetadata.companyFullName} provides the sea freight services
                at the competitive rates. We can manage to avoid off load
                shipment at departure port or transit port. Trucks are available
                for domestic transportation.
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
                  Main services and products
                </h2>
                <div className={styles.list}>
                  <ul className="p-0 fa-ul">
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Export & import cargoes from Viet Nam to worldwide and
                      vice versa.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Main market: USA, EUs, JAPAN, ASIA.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Full Container Load services with competitive freight
                      rates and save time.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Door to door delivery services.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Cargoes insurance brokerage.
                    </li>
                    <li className="mb-2 lead">
                      <span class="fa-li">
                        <i class="fa fa-share" />
                      </span>
                      Projects and exhibition cargoes services in Viet Nam and
                      and the surrounding area: Laos, Cambodia...
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

export default SeaFreight
