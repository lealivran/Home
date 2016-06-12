import React from 'react'
import CityPresentation from '../../../components/cityPresentation'
import Annonce from '../../../components/Annonce'


import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <CityPresentation/>

    <div className={classes.annonceContainer}>
      <Annonce/>
      <Annonce/>
      <Annonce/>
    </div>

  </div>
)

export default HomeView
