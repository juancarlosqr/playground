import { connect } from 'react-redux'
import AppComponent from './AppComponent'
import { increment, decrement, reset } from '../actions'

const mapStateToProps = (state) => ({
  likes: state
})

const mapDispatchToProps = (dispatch) => ({
  onLike: () => dispatch(increment()),
  onDislike: () => dispatch(decrement()),
  onReset: () => dispatch(reset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
