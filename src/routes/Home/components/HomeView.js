import React from 'react'
import Header from '../../../components/Header'
import CityPresentation from '../../../components/cityPresentation'
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
