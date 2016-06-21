import React ,{Component} from 'react'
import classes from './HomeView.scss'
import {Link , browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import fetch from 'isomorphic-fetch'
export default class HomeView extends Component {
  state = {
    username : null,
    password: null
  }
  handleSubmit = () =>{
    if( (this.state.identifiant !== null  && this.state.password !== null) &&
        (this.state.identifiant !== ''  && this.state.password !== '') ){
          this.props.history.push('/admin/dashboard');
    }
  }
  render(){
    return(
    <div className={classes.home}>
      <div className={classes.form}>
        <TextField
          hintText="Identifiant field"
          floatingLabelText="Identifiant"
          onChange= {(event)=>{ this.setState({username: event.target.value})} }
        />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          onChange= {(event)=>{ this.setState({password: event.target.value})} }
        /><br/>
        <FloatingActionButton  onClick={this.handleSubmit}>
          <ContentAdd />
        </FloatingActionButton>
      </div>

    </div>)
  }
}
