import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import fetch from 'isomorphic-fetch'
// import fetch from 'fetch'
// const fetchUrl = fetch.fetchUrl;


import classes from './annoncePage.scss'
import HeaderSearch from '../headerSearch'
import ImageAnnonce from '../imageAnnonce'
import TitreAnnonce from '../titreAnnonce'
import InfoAnnonce from '../infoAnnonce'

export default class annoncePage extends Component {

  //
  // static propTypes = {
  //     params: PropTypes.shape({
  //       annonceId:PropTypes.string,
  //     }),
  // };
  //
  // static defaultProps = {
  //     params: {},
  // };
  //
  // state = {
  //   annonce: [],
  // };
  //
  // fetchAnnonce = () => {
  //   fetch('/'+params.annonceId)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((annonce) => {
  //     this.setState({annonce: lastAnnonces.data })
  //     // console.log(lastAnnonces);
  //   })
  //   .catch((error) => {
  //     console.warn(error);
  //   });
  // };
  //
  // componentDidMount() {
  //   this.fetchLastAnnonce();
  // };

  render(){
    return (

      <div>
        <HeaderSearch />
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
