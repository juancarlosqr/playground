import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'
import Likes from './Likes'

const AppComponent = ({ likes, onDislike, onLike, onReset, unsubscribe }) => (
  <div>
    <Header />
    <div>
      <Likes count={likes} message='"Talk is cheap, show me the code"' />
      <button onClick={onLike}>I like this!</button>
      <button onClick={onDislike}>I don't like this!</button>
      <button onClick={onReset}>Reset!</button>
      <button onClick={unsubscribe}>Unsubscribe</button>
    </div>
    <div>
      <Likes count={1} />
    </div>
    <Footer />
  </div>
)

AppComponent.propTypes = {
  likes: PropTypes.number.isRequired,
  onDislike: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  unsubscribe: PropTypes.func,
}

AppComponent.defaultProps = {
  unsubscribe: Function.prototype,
}

export default AppComponent
