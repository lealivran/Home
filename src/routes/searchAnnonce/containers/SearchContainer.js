import { connect } from 'react-redux'
import  React , { Component, PropTypes} from 'react'
import styles from './search.scss'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import fetch from 'isomorphic-fetch'
import Annonce from 'components/Annonce'
export class SearchView extends Component {
  state ={
    open: false,
    annoncesNumber: 0
  }
  PropTypes ={
    results: PropTypes.array
  }
  ToggleMenu = ( ) => {
    this.setState({open: !this.state.open})
  }
  render(){
      const { results } = this.props
    return(
      <div className={styles.container}>
        <section className={styles.first}>
          {/*<Search/>*/}
        </section>
        <section className={styles.second}>
          <section className={styles.results}>
            {
              results.map( annonce =>{
                return <Annonce title={ annonce.title} price={annonce.price} image={annonce.images[0]} />
              })
            }
          </section>
          <section className={styles.map}>

          </section>
        </section>
      </div>
    )
  }
}
const mapActionCreators = {
  // increment: () => increment(1),
  // doubleAsync
}
const mapStateToProps = (state) => ({
  results: state.search.results
})
export default connect(mapStateToProps, mapActionCreators)(SearchView)
