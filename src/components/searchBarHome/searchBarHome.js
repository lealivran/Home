import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './searchbarhome.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';


export const searchbarhome = () => (

<div className={classes.containerSearchHome}>
<Grid>
   <Row className="show-grid contentSearchHome row-no-gutter">
      <form>
         <Col xs={12} md={2} lg={2}>
            <FormControl componentClass="select" placeholder="Acheter">
               <option value="Louer">Louer</option>
               <option value="acheter">Acheter</option>
            </FormControl>
         </Col>
         <Col xs={12} md={3} lg={3}>
            <FormControl componentClass="select" placeholder="Maison">
               <option value="Maison">Maison</option>
               <option value="appartement">appartement</option>
            </FormControl>
         </Col>
         <Col xs={12} md={4} lg={4}>
            <FormGroup>
               <FormControl type="text" placeholder="Adresse, Ville..." />
            </FormGroup>
         </Col>
         <Col xs={12} md={2} lg={2}>
            <FormGroup>
               <FormControl type="text" placeholder="Prix Max" />
            </FormGroup>
         </Col>
         <Col xs={12} md={1} lg={1}>
            <Button type="submit" >
               OK
            </Button>
         </Col>
      </form>
   </Row>
</Grid>
   </div>
)
export default searchbarhome
