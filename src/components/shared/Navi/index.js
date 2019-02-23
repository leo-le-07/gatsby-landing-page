import React from 'react'
import { withPrefix } from 'gatsby'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

class Navi extends React.Component {
  render() {
    const { location, siteMetadata } = this.props
    const { companyName } = siteMetadata
    return (
      <Container className={styles.container}>
        <Navbar expand="md" className="navigation">
          <Navbar.Brand href="/">
            <img
              src={withPrefix('/img/logo.jpg')}
              alt={companyName}
              className={styles.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className="px-4"
                href="/"
                active={location.pathname === '/' ? true : false}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="px-4"
                href="/about"
                active={location.pathname === '/about' ? true : false}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="px-4"
                href="/services"
                active={location.pathname === '/services' ? true : false}
              >
                Our Services
              </Nav.Link>
              <Nav.Link
                className="px-4"
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                News
              </Nav.Link>
              <Nav.Link
                className="px-4"
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default Navi
