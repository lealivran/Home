import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './infoAnnonce.scss'
import { ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

export const infoAnnonce = ({features="", description="", orientation="", area="", furnished="", type=""}) => (

  <div className={classes.infoAnnonce}>
    <h5>{type} de {area}m2</h5>
    <p>{description}</p>

    <h5>Caractéristiques : </h5>

    <ListGroup>
      {features.pool && <ListGroupItem>Piscine</ListGroupItem>}
      {features.garden && <ListGroupItem>Jardin</ListGroupItem>}
      {features.balcony && <ListGroupItem>Balcon</ListGroupItem>}
      {features.terrace && <ListGroupItem>Terrace</ListGroupItem>}
      {features.parking && <ListGroupItem>Parking</ListGroupItem>}
      {features.cave && <ListGroupItem>Cave</ListGroupItem>}
      <ListGroupItem>{features.roomNumber} pièces</ListGroupItem>
      <ListGroupItem>{features.bedroomNumber} chambres</ListGroupItem>
      <ListGroupItem>orientation : {orientation}</ListGroupItem>
    </ListGroup>

    <div className={classes.contact}>

    <h5>Contactez l'agence : </h5>

    <form className={classes.form}>
    <FormGroup controlId="formControlsText">
      <ControlLabel>Votre Nom</ControlLabel>
      <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formControlsText">
      <ControlLabel>Votre Prénom</ControlLabel>
      <FormControl type="text"/>
    </FormGroup>

    <FormGroup controlId="formControlsEmail">
      <ControlLabel>Votre adresse Email</ControlLabel>
      <FormControl type="email" placeholder="ex: toto@gmail.com" />
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Votre message</ControlLabel>
      <FormControl componentClass="textarea" />
    </FormGroup>

    <Button className={classes.button} type="submit">
      Envoyer
    </Button>
    </form>

    </div>

  </div>

)

export default infoAnnonce
