import React from 'react'
import classes from './HomeView.scss'
import {Link , } from 'react-router'
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
//Have to change
import fetch from 'isomorphic-fetch'
let state = {
  username : null,
  password: null
}

const handleIdentifiant = (event) =>{
    state.username = event.target.value ;
}
const handlePassword = (event) =>{
    state.password = event.target.value ;
}
const handleSubmit = () =>{
  console.log(state);
  if( (state.identifiant !== null  && state.password !== null) &&
      (state.identifiant !== ''  && state.password !== '') ){
        fetch('/auth', {
          method: 'post',
          body: state
        })
        .then( data => {
          const { user } = data ;
          console.log(admin);
        })
        .catch(err =>{
          console.log(err);
        })
  }
}
//--Have to change
export const HomeView = () => (
  <div className={classes.home}>
    <div className={classes.form}>
      <TextField
        hintText="Identifiant field"
        floatingLabelText="Identifiant"
        onChange= {handleIdentifiant}
      />
      <TextField
        hintText="Password Field"
        floatingLabelText="Password"
        type="password"
        onChange= {handlePassword}
      /><br/>
      <FloatingActionButton  onClick={handleSubmit}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
    {/*<Link to='admin/create/annonce'>
      Zen
    </Link>*/}
  </div>
)

export default HomeView
