import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './imageAnnonce.scss'

export const imageAnnonce = ({urlImage ="", prix = ""}) => (

  <div className={classes.imageAnnonce}>
    <img className={classes.image} src={urlImage} />
    <span className={classes.info}>{prix} €</span>
  </div>

)

export default imageAnnonce
