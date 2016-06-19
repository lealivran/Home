import React from 'react'
import classes from './AnnonceView.scss'
import HeaderSearch from '../../../components/headerSearch'
import ImageAnnonce from '../../../components/imageAnnonce'
import TitreAnnonce from '../../../components/titreAnnonce'
import InfoAnnonce from '../../../components/infoAnnonce'

export const AnnonceView = () => (
  <div>
    <HeaderSearch />
    <ImageAnnonce
      urlImage="http://www.maisons-delacour.com/photos/diapo/maison-delacour-1836.jpg"
      prix="6274"
    />
    <TitreAnnonce
      titre="Appartement 5 pièces 185m² Avignon"
      ventre="true"
      adresse="Quartier Saint-Didier, Avignon"
    />
    <InfoAnnonce
      description="description"
      pool="true"
      garden="false"
      balcony="true"
      terrace="false"
      parking="true"
      cave="true"
      stairs="2"
      bedroomNumber="7"
      roomNumber="9"
      orientation="west"
      area="250"
      furnished="false"
    />


  </div>
)

export default AnnonceView
