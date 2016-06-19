import React from 'react'
import classes from './HomeView.scss'
import {Link } from 'react-router'
import TextField from 'material-ui/TextField';

export const HomeView = () => (
  <div className={classes.home}>
    <div>
    <TextField
      hintText="Pseudo"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    />
    </div>
    {/*<Link to='admin/create/annonce'>
      Zen
    </Link>*/}
  </div>
)

export default HomeView
