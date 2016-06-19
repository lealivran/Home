import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import fetch from 'isomorphic-fetch'
// import fetch from 'fetch'
// const fetchUrl = fetch.fetchUrl;


import classes from './annonceWrapper.scss'
import Annonce from '../Annonce'

export default class annoncePage extends Component {


  static propTypes = {
      params: PropTypes.shape({
        annonceId:PropTypes.string,
      }),
  };

  static defaultProps = {
      params: {},
  };

  state = {
    annonce: [],
  };

  fetchAnnonce = () => {
    fetch('/'+params.annonceId)
    .then((response) => {
      return response.json()
    })
    .then((annonce) => {
      this.setState({annonce: lastAnnonces.data })
      // console.log(lastAnnonces);
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
        {this.state.annonce.map((annonce, index) => {
          return <Annonce
                  title={annonce.title}
                  price={annonce.price}
                  />
        })}
      </div>
    )
  }
}
