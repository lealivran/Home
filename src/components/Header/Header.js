import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import Searchbarhome from '../searchbarhome'
import { Grid, Row, Col } from 'react-bootstrap';


export const Header = () => (
   <header className={classes.header}>
         <Searchbarhome />
   </header>
)

export default Header
