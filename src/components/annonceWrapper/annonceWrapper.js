import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import classes from './annonceWrapper.scss'
import Annonce from '../Annonce'

export default class annonceWrapper extends Component {

  render(){

    return (
      <div className={classes.annonceContainer}>
        <Annonce/>
        <Annonce/>
        <Annonce/>
      </div>
    )
  }
}
