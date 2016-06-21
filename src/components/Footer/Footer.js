import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Footer.scss'
import { Grid, Row, Col } from 'react-bootstrap';


export const Footer = () => (
  <footer className={classes.footer}>
    <p>© Home 2016
    <Link to='admin' className={classes.admin}>
      Administration
    </Link>
    </p>
  </footer>
)

export default Footer
