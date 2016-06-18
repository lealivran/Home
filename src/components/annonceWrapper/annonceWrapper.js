import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import fetch from 'isomorphic-fetch'
import classes from './annonceWrapper.scss'
import Annonce from '../Annonce'

export default class annonceWrapper extends Component {

  state = {
    annonces: [],
  };

  fetchLastAnnonce = () => {
    fetch('/last/annonces/')
    .then((response) => {
      return response.json()
    })
    .then((lastAnnonces) => {
      this.setState({annonces: lastAnnonces.data })
    })
    .catch((error) => {
      console.warn(error);
    });
  };

  componentDidMount() {
    this.fetchLastAnnonce();
  };

  render(){
    return (
      <div className={classes.annonceContainer}>
        {this.state.annonces.map((annonce, index) => {
          return <Annonce
                  title={annonce.title}
                  price={annonce.price}
                  />
        })}
      </div>
    )
  }
}
