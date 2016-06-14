import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import classes from './annonceWrapper.scss'
import Annonce from '../Annonce'

export default class annonceWrapper extends Component {

  state = {
    lastAnnonces: null,
  };


  fetch('/last/annonces/')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(lastAnnonces) {
		console.log(lastAnnonces);
	});



  render(){
    return (
      <div className={classes.annonceContainer}>
        <Annonce
          title={"maison"}
          price={"2000"}
          image={"http://www.maisonsclairlogis.fr/wp-content/uploads/maison-moderne_semnoz_700.jpg"}
          />
        <Annonce
          title={"chateau"}
          price={"20000"}
          image={"http://www.chateaux-de-la-loire.fr/images/chateau_de_challain.jpg"}
          />
        <Annonce
          title={"cabane"}
          price={"800"}
          image={"http://www.cabanes-des-legendes.com/photos/merlin-cabane-3.jpg"}
          />
      </div>
    )
  }
}
