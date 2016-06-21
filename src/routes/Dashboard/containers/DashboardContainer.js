import { connect } from 'react-redux'
import  React , { Component} from 'react'
import styles from './dashboard.scss'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import fetch from 'isomorphic-fetch'
export class DashboardView extends Component {
  state ={
    open: false,
    annoncesNumber: 0
  }
  ToggleMenu = ( ) => {
    this.setState({open: !this.state.open})
  }
  ComponentWillMount(){
    fetch('annonces', {method:'get'}).then(data=>{
      console.log(data);
    })
    .catch(err =>{

    })
  }
  render(){
    return(
      <div className={styles.container}>
        <AppBar
        title="Dashboard"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        className={styles.AppBar}
        onLeftIconButtonTouchTap={this.ToggleMenu()}
        />
        <Drawer open={this.state.open}>
          <MenuItem Link="admin/create/annonce">create annonce</MenuItem>
          <MenuItem Link="admin/user">users</MenuItem>
          <MenuItem Link="admin/negociation">negociation</MenuItem>
        </Drawer>
      </div>
    )
  }
}
const mapActionCreators = {
  // increment: () => increment(1),
  // doubleAsync
}
const mapStateToProps = (state) => ({
  // counter: state.counter
})
export default connect(mapStateToProps, mapActionCreators)(DashboardView)
