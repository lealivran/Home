import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import fetch from 'isomorphic-fetch'
// import fetch from 'fetch'
// const fetchUrl = fetch.fetchUrl;


import classes from './annonceWrapper.scss'
import Annonce from '../Annonce'
import { Grid, Row, Col } from 'react-bootstrap'


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
      console.log(lastAnnonces);
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
         <Grid>
            <Row className="show-grid">
              {this.state.annonces.map((annonce, index) => {
                 return <Link to={`/annonce/${annonce._id}`}>
                     <Annonce
                        area={annonce.area}
                        title={annonce.title}
                        price={annonce.price}
                        type={annonce.type}
                        vente={annonce.vente}
                        city={annonce.city}
                        zipcode={annonce.zipcode}
                        image={annonce.pictures[0].uri}
                        />
                  </Link>
              })}
            </Row>
         </Grid>
      </div>
    )
  }
}
