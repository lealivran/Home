import { connect } from 'react-redux'
import AnnoncePage from 'components/annoncePage'
const mapActionCreators = {
  // increment: () => increment(1),
  // doubleAsync
}
const mapStateToProps = (state) => ({
  // counter: state.counter
})
export default connect(mapStateToProps, mapActionCreators)(AnnoncePage)
