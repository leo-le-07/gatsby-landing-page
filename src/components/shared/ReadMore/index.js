import React from 'react'
import { Button } from 'react-bootstrap'

const ReadMore = ({ path }) => (
  <Button variant="primary" href={path}>
    Read More
  </Button>
)

export default ReadMore
