import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row header">
        <div className="container">
          <Link className="text-center navbar-brand mb-0" to="/">
            <img
              src="http://pocoexpress.com.vn/wp-content/uploads/2016/05/xlogo-poco.png.pagespeed.ic.aIMUc3KO3L.webp"
              alt="Sea Freight, Air Freight, Multimodal transport, Logistics services"
            />
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
