import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Annonce.scss'

export const Annonce = () => (

  <div className={classes.annonce}>
  <div className={classes.info}>
    <p>Super maison de ouf
    <span>1500€/mois</span>
    </p>
  </div>
    <img className={classes.bgAnnonce} src="http://www.maisonsclairlogis.fr/wp-content/uploads/maison-moderne_semnoz_700.jpg" />

  </div>

)

export default Annonce
