import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import fetch from 'isomorphic-fetch'
// import fetch from 'fetch'
// const fetchUrl = fetch.fetchUrl;


import classes from './annoncePage.scss'
import ImageAnnonce from '../imageAnnonce'
import Searchbartop from '../imageAnnonce'
import TitreAnnonce from '../titreAnnonce'
import InfoAnnonce from '../infoAnnonce'
import { Grid, Row, Col } from 'react-bootstrap'


export default class annoncePage extends Component {

  state = {
    annonce: [],
  };

  fetchAnnonce = () => {
    fetch('/annonce/'+this.props.params.id)
    .then((response) => {
      return response.json()
    })
    .then((annonce) => {
      this.setState({annonce: annonce.data })
      console.log(annonce);
    })
    .catch((error) => {
      console.warn(error);
    });
  };

  componentDidMount() {
    this.fetchAnnonce();
  };

  render(){

    const {
      params
    } = this.props

    return (

      <div>
        <ImageAnnonce
          urlImage="http://www.maisons-delacour.com/photos/diapo/maison-delacour-1836.jpg"
          prix="6274"
        />
        <TitreAnnonce
          titre="Appartement 5 pièces 185m² Avignon"
          ventre="true"
          adresse="Quartier Saint-Didier, Avignon"
        />
        <InfoAnnonce
          description="description"
          pool="true"
          garden="false"
          balcony="true"
          terrace="false"
          parking="true"
          cave="true"
          stairs="2"
          bedroomNumber="7"
          roomNumber="9"
          orientation="west"
          area="250"
          furnished="false"
        />
      </div>
    )
  }
}
