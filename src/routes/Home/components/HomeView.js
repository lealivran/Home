import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

import Searchbarhome from '../../../components/searchbarhome'

import CityPresentation from '../../../components/cityPresentation'
import AnnonceWrapper from '../../../components/AnnonceWrapper'
import classes from './HomeView.scss'


export const HomeView = () => (
  <div>
    <Header />
    <CityPresentation/>
    <AnnonceWrapper/>
    <Footer />
  </div>
)

export default HomeView
