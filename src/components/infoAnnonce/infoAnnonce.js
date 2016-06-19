import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './infoAnnonce.scss'

export const infoAnnonce = ({description="", pool="", garden="", balcony="", terrace="", parking="", cave="", stairs="", bedroomNumber="", roomNumber="", orientation="", area="", furnished=""}) => (

  <div className={classes.infoAnnonce}>
    <p>{description}</p>
    <ul>
    {pool && <li>Piscine</li>}
    {garden && <li>Jardin</li>}
    {balcony && <li>Balcon</li>}
    {terrace && <li>Terrace</li>}
    {parking && <li>Parking</li>}
    {cave && <li>Cave</li>}
    </ul>
  </div>

)

export default infoAnnonce
