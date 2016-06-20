import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CityPresentation from '../../../components/cityPresentation'
import Annonce from '../../../components/Annonce'
import Searchbarhome from '../../../components/searchbarhome'

import AnnonceWrapper from '../../../components/AnnonceWrapper'
import classes from './HomeView.scss'
import {Link } from 'react-router'

export const HomeView = () => (
  <div>
   <Header />
    <CityPresentation/>
    <AnnonceWrapper/>
    <Link to='admin/create/annonce'>
      Zen
    </Link>
    <Link to='admin'>
      Home
    </Link>
    <Footer />
  </div>
)

export default HomeView
