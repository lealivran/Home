import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './infoAnnonce.scss'

export const infoAnnonce = ({features="", description="", orientation="", area="", furnished="", type=""}) => (

  <div className={classes.infoAnnonce}>
    <h5>{type} de {area}m2</h5>
    <p>{description}</p>

    <p>contient : </p>
    <ul>
    {features.pool && <li>Piscine</li>}
    {features.garden && <li>Jardin</li>}
    {features.balcony && <li>Balcon</li>}
    {features.terrace && <li>Terrace</li>}
    {features.parking && <li>Parking</li>}
    {features.cave && <li>Cave</li>}
    </ul>
    <p>Nombre de pièces : {features.roomNumber}</p>
    <p>Nombre de chambres : {features.bedroomNumber}</p>
    <p>Orientation : {orientation}</p>
  </div>

)

export default infoAnnonce
