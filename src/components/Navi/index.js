import React from 'react'
import { withPrefix } from 'gatsby'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, siteMetadata } = this.props
    const { companyName } = siteMetadata
    return (
      <Container>
        <Navbar expand="md" className="header">
          <Navbar.Brand href="/">
            <img
              src={withPrefix('/img/logo.jpg')}
              alt={companyName}
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="/"
                active={location.pathname === '/' ? true : false}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                Our Services
              </Nav.Link>
              <Nav.Link
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                News
              </Nav.Link>
              <Nav.Link
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                Tracking
              </Nav.Link>
              <Nav.Link
                href="/profile"
                active={location.pathname === '/profile' ? true : false}
              >
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      // <nav className="navbar navbar-expand-md navbar-light header">
      //   <Link className="navbar-brand" to="/">
      //     <img
      //       src="http://pocoexpress.com.vn/wp-content/uploads/2016/05/xlogo-poco.png.pagespeed.ic.aIMUc3KO3L.webp"
      //       alt="Sea Freight, Air Freight, Multimodal transport, Logistics services"
      //       className="logo"
      //     />
      //   </Link>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   <div className="collapse navbar-collapse" id="collapsibleNavbar">
      //     <div className="navbar-nav-scroll">
      //       <ul className="navbar-nav bd-navbar-nav flex-row">
      //         <li
      //           className={
      //             location.pathname === '/' ? 'nav-item active' : 'nav-item'
      //           }
      //         >
      //           <Link to="/" className="nav-link">
      //             Home
      //           </Link>
      //         </li>
      //         <li
      //           className={
      //             location.pathname === '/about'
      //               ? 'nav-item active'
      //               : 'nav-item'
      //           }
      //         >
      //           <Link to="/about" className="nav-link">
      //             About Us
      //           </Link>
      //         </li>
      //         <li
      //           className={
      //             location.pathname === '/services'
      //               ? 'nav-item active'
      //               : 'nav-item'
      //           }
      //         >
      //           <Link to="/services" className="nav-link">
      //             Our Services
      //           </Link>
      //         </li>
      //         <li
      //           className={
      //             location.pathname === '/news'
      //               ? 'nav-item active'
      //               : 'nav-item'
      //           }
      //         >
      //           <Link to="/news" className="nav-link">
      //             News
      //           </Link>
      //         </li>
      //         <li
      //           className={
      //             location.pathname === '/tracking'
      //               ? 'nav-item active'
      //               : 'nav-item'
      //           }
      //         >
      //           <Link to="/tracking" className="nav-link">
      //             Tracking
      //           </Link>
      //         </li>
      //         <li
      //           className={
      //             location.pathname === '/contact'
      //               ? 'nav-item active'
      //               : 'nav-item'
      //           }
      //         >
      //           <Link to="/contact" className="nav-link">
      //             Contact
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //     <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      //   </div>
      // </nav>
    )
  }
}

export default Navi
