import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Annonce.scss'

export const Annonce = () => (
   <div className={classes.header}>
     <div className={classes.first} >
     </div>
     <div className={classes.containerSecondThird}>
       <div className={classes.second}></div>
       <div className={classes.third}></div>
     </div>
   </div>
)

export default Annonce
