import React from 'react'
import CityPresentation from '../../../components/cityPresentation'
import Annonce from '../../../components/Annonce'
import AnnonceWrapper from '../../../components/AnnonceWrapper'
import classes from './HomeView.scss'


export const HomeView = () => (
  <div>
    <Header />
    <CityPresentation/>
    <AnnonceWrapper/>
  </div>
)

export default HomeView
