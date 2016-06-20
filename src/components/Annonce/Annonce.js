import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Annonce.scss'
import { Grid, Row, Col } from 'react-bootstrap';


export const Annonce = ({title ="", price="", image=null, type="", area="", vente="", city="", zipcode=""}) => (


  <Col xs={12} md={4} lg={4}>
   <div className={classes.vignettesAnnonce}>
     <div className={classes.infobg}>
     </div>
     <Row className="show-grid">
      <div className={classes.info}>
           <Col xs={7} md={7} lg={7}>
             <p className={classes.titreannonce}>{type} à {vente}</p>
             <p className={classes.titreadresse}>{city}, {zipcode}</p>
             <p className={classes.surfacebien}>{area} M²</p>
           </Col>
           <Col xs={5} md={5} lg={5} className="blockRight">
             <p className={classes.titreprix}>{price} €</p>
           </Col>
      </div>
     </Row>
   </div>
  </Col>

)

export default Annonce
