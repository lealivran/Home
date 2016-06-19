import React from 'react'
import CityPresentation from '../../../components/cityPresentation'
import Annonce from '../../../components/Annonce'
import AnnonceWrapper from '../../../components/AnnonceWrapper'
import classes from './HomeView.scss'
import {Link } from 'react-router'

export const HomeView = () => (
  <div>
    <CityPresentation/>
    <Link to='admin/create/annonce'>
      Zen
    </Link>
    <AnnonceWrapper/>
  </div>
)

export default HomeView
