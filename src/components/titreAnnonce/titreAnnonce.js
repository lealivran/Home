import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './titreAnnonce.scss'

export const titreAnnonce = ({titre="", vente=null, adresse="" }) => (

  <div className={classes.titreAnnonce}>
    <a className={classes.linkVente} href="#">
      {vente ?
        <span>Acheter</span> :
        <span>Louez</span>
      }
    </a>
    <h1 className={classes.titre}>{titre}</h1>
    <p className={classes.adresse}>{adresse}</p>
  </div>

)

export default titreAnnonce
