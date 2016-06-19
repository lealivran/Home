import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Annonce.scss'

export const Annonce = ({title ="", price="", image=null}) => (

  <div className={classes.annonce}>
    <div className={classes.info}>
      <p>titre
      <span>{price}€/mois</span>
      </p>
    </div>
    <img className={classes.bgAnnonce} src={image} />
  </div>

)

export default Annonce
