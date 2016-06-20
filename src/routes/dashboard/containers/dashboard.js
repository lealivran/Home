import { connect } from 'react-redux'
import CreateAnnonce from 'components/CreateAnnonce'
const mapActionCreators = {
  // increment: () => increment(1),
  // doubleAsync
}
const mapStateToProps = (state) => ({
  // counter: state.counter
})
export default connect(mapStateToProps, mapActionCreators)(CreateAnnonce)
