import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './cityPresentation.scss'
import { Grid, Row, Col } from 'react-bootstrap';


export const cityPresentation = () => (
   <Grid>
   <Row className="show-grid onecity">
     <Col xs={12} md={12} lg={12}>
         <div className={classes.first} >
           <div className={classes.filterBlack} >
           </div>
           <div className={classes.titlecity} >
             <p>STRASBOURG</p>
           </div>
         </div>
     </Col>
   </Row>
   <Row className="show-grid">
     <Col xs={12} md={5} lg={5}>
         <div className={classes.second}>
            <div className={classes.filterBlack} >
            </div>
            <div className={classes.titlecity} >
              <p>LILLE</p>
            </div>
         </div>
     </Col>
     <Col xs={12} md={7} lg={7}>
        <div className={classes.third}>
           <div className={classes.filterBlack} >
           </div>
           <div className={classes.titlecity} >
              <p>NICE</p>
           </div>
        </div>
      </Col>
   </Row>
   <Row className="show-grid ">
     <Col xs={12} md={12} lg={12}>
         <h2>
            Les nouvelles Anonces
         </h2>
     </Col>
   </Row>
   </Grid>

)
export default cityPresentation
