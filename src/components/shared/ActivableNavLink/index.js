import React from 'react'
import { Nav } from 'react-bootstrap'

const ActivableNavLink = props => {
  const { path, title, location, ...rest } = props
  return (
    <Nav.Link
      {...rest}
      href={path}
      active={location.pathname === path ? true : false}
    >
      {title}
    </Nav.Link>
  )
}

export default ActivableNavLink
