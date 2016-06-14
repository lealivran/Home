import Annonce from '../../../components/Annonce'
import classes from './AnnonceView.scss'
import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

// import { get as getArtist } from "app/reducers/artist"
// import ItemDetails from "ItemDetails"

@connect(
    (state) => ({
        Annonce : state.annonce
    }),
    (dispatch) => ({
        getAllAnonce : (value) => dispatch(getAllAnonce(value)),
    })
)
export default class AnnonceView extends Component {

  static propTypes = {
      params: PropTypes.shape({
        annonceId:PropTypes.string,
      }),
      annonce : PropTypes.object,
      getAllAnnonce : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      annonce : null,
      getAllAnnonce : () => {}
  };
  componentDidMount(){

      const {
        params,
        getAllAnnonce,
      } = this.props

      if(params.annonceId) getAllAnnonce(params.annonceId)
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getAllAnnonce,
    } = this.props

    if(nextProps.params.annonceId!=params.annonceId){
      getArtist(nextProps.params.annonceId)
    }
  }

  render() {
    const {
      params,
      annonce,
    } = this.props
    return (
      <div>
        {
            // annonce && !annonce.loading &&
            <AnnonceView title={annonce.name}  />
        }
      </div>
    )
  }
}
