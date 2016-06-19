import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './imageAnnonce.scss'
import { Grid, Row, Col } from 'react-bootstrap';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';


export const imageAnnonce = ({urlImage ="", prix = ""}) => (

<Row className="show-grid  row-no-gutter">
   <div className={classes.CarouselInfo}>
      <Col xs={12} md={12} lg={12}>
         <Carousel>
            <Carousel.Item>
               <img className={classes.imageAnnonce} src={urlImage} />
            </Carousel.Item>
         </Carousel>
         <div className={classes.imageAnnonceInfo}>
            <div className={classes.infobg}></div>
            <span className={classes.info}>{prix} €</span>
         </div>
      </Col>
   </div>
</Row>

)

export default imageAnnonce
