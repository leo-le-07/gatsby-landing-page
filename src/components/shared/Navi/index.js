import React from 'react'
import { withPrefix } from 'gatsby'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

import ActivableNavLink from 'components/shared/ActivableNavLink'

import routes from 'utils/routes'

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
              <ActivableNavLink
                className="px-4"
                path={routes.ROOT}
                location={location}
                title="Home"
              />
              <ActivableNavLink
                className="px-4"
                path={routes.ABOUT}
                location={location}
                title="About Us"
              />
              <ActivableNavLink
                className="px-4"
                path={routes.SERVICE}
                location={location}
                title="Our Services"
              />
              <ActivableNavLink
                className="px-4"
                path={routes.NEWS}
                location={location}
                title="News"
              />
              <ActivableNavLink
                className="px-4"
                path={routes.CONTACT}
                location={location}
                title="Contact"
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default Navi
