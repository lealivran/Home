import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import classes from './annonceWrapper.scss'
import Annonce from '../Annonce'
import { Grid, Row, Col } from 'react-bootstrap';


export default class annonceWrapper extends Component {

  render(){

    return (
      <div className={classes.annonceContainer}>
      <Grid>
         <Row className="show-grid">
            <Annonce/>
            <Annonce/>
            <Annonce/>
            </Grid>
         </Row>
      </div>

    )
  }
}
