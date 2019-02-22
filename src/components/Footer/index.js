import React from 'react'
import { withPrefix } from 'gatsby'
import { Container, Row, Col, Figure } from 'react-bootstrap'
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
                  <a href="#!">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#!">About Us</a>
                </li>
                <li className="menu-item">
                  <a href="#!">Our Services</a>
                </li>
                <li className="menu-item">
                  <a href="#!">News</a>
                </li>
                <li className="menu-item">
                  <a href="#!">Tracking</a>
                </li>
                <li className="menu-item">
                  <a href="#!">Contact</a>
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
            <div className="address">
              <p>
                <i className="fa fa-map-marker fa-2x fa-fw" />
                {siteMetadata.address}
              </p>
              <p>
                <i className="fa fa-phone fa-2x fa-fw" />
                {siteMetadata.phone}
              </p>
              <p>
                <i className="fa fa-envelope fa-2x fa-fw" />
                {siteMetadata.email}
              </p>
              <p>
                <i className="fa fa-fax fa-2x fa-fw" />
                {siteMetadata.tax}
              </p>
              <p>
                <i className="fa fa-clock-o fa-2x fa-fw" />
                {siteMetadata.workingTime}
              </p>
            </div>
          </aside>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
