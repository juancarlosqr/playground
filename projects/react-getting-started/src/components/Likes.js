import React, {
  Component,
  PropTypes
} from 'react'

export default class Likes extends Component {
  render () {
    return (
      <p>{ this.props.count } likes</p>
    )
  }
}

Likes.propTypes = {
  count: PropTypes.number
}
