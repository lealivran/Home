import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './searchbartop.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap'
import Logo from '../logo'


export const searchbartop = () => (

<div className={classes.containerSearchTop}>
<Row className="show-grid  row-no-gutter">
   <Col xs={12} md={1} lg={1}>
      <Logo />
   </Col>
   <Col xs={12} md={11} lg={11}>
      <Row className="show-grid contentSearchHome row-no-gutter">
         <form>
            <Col xs={10} md={10} lg={10}>
               <FormGroup>
                  <FormControl type="text" placeholder="Trouvez dans une autre ville..." />
               </FormGroup>
            </Col>
            <Col xs={2} md={2} lg={2}>
               <Button type="submit" >
                  OK
               </Button>
            </Col>
         </form>
      </Row>
   </Col>
</Row>
   </div>
)
export default searchbartop
