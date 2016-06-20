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
    .then((annonce, pictures) => {
      this.setState({annonce: annonce.data }),
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

    return (
      <div>
        <ImageAnnonce
          images="http://www.maisons-delacour.com/photos/diapo/maison-delacour-1836.jpg"
          price={this.state.annonce.price}
        />
        <TitreAnnonce
          titre={this.state.annonce.title}
          vente={this.state.annonce.vente}
          // adresse={this.state.annonce.address}
        />
        <InfoAnnonce
          description={this.state.annonce.description}
          features={this.state.annonce.features}
          orientation={this.state.annonce.orientation}
          area={this.state.annonce.area}
          furnished={this.state.annonce.furnished}
          type={this.state.annonce.type}
        />
      </div>
    )
  }
}
