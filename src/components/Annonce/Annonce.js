import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Annonce.scss'
import { Grid, Row, Col } from 'react-bootstrap';


export const Annonce = () => (


        <Col xs={12} md={4} lg={4}>
         <div className={classes.vignettesAnnonce}>
           <div className={classes.infobg}>
           </div>
           <Row className="show-grid">
            <div className={classes.info}>
                 <Col xs={7} md={7} lg={7}>
                   <p className={classes.titreannonce}>Maison à vendre</p>
                   <p className={classes.titreadresse}>Metz, 57000</p>
                   <p className={classes.surfacebien}>27 M²</p>
                 </Col>
                 <Col xs={5} md={5} lg={5} className="blockRight">
                   <p className={classes.titreprix}>124 000 €</p>
                 </Col>
            </div>
           </Row>
         </div>
        </Col>

)

export default Annonce
