import React from 'react'
import { withPrefix, Link } from 'gatsby'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import ContactInfo from 'components/shared/ContactInfo'
import './style.scss'

const Footer = ({ siteMetadata }) => (
  <div className="footer">
    <Container>
      <Row>
        <Col md={4}>
          <aside>
            <h3 className="widget-title">About Us</h3>
            <div className="text-widget">
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="Skyline Logistics"
                  src={withPrefix('/img/logo.jpg')}
                />
                <Figure.Caption>
                  Transport offers a host of logistic management services and
                  supply chain solutions. We provide innovative solutions with
                  the best people, processes, and technology.
                </Figure.Caption>
              </Figure>
            </div>
            <div className="social">
              <div className="social-menu">
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoRss" title="Rss">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoTwitter" title="Twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoGoogle" title="Google +">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </Col>
        <Col md={4}>
          <aside>
            <h3 className="widget-title">Information</h3>
            <div className="information">
              <ul className="list-unstyled information-menu">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item">
                  <Link to="/services">Our Services</Link>
                </li>
                <li className="menu-item">
                  <Link to="/">News</Link>
                </li>
                <li className="menu-item">
                  <Link to="/">Tracking</Link>
                </li>
                <li className="menu-item">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </aside>
        </Col>
        <Col md={4}>
          <aside>
            <h3 className="widget-title">
              {siteMetadata.companyFullName} Office
            </h3>
            <ContactInfo siteMetadata={siteMetadata} />
          </aside>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
