import React, {
  Component,
  PropTypes
} from 'react'

export default class Likes extends Component {
  render () {
    return (
      <div>
        <LikesNumber count={ this.props.count } />
        <LikesComplete { ...this.props } />
        <Comments message={ this.props.message } />
      </div>
    )
  }
}

Likes.propTypes = {
  count: PropTypes.number.isRequired,
  message: PropTypes.string
}

Likes.defaultProps = {
  message: 'Built with React JS'
}

/* Stateless components */
const LikesNumber = ({ count }) => (
  <p>{ count } likes</p>
)

const LikesComplete = ({ count }) => (
  <p>{ `${ count } likes` }</p>
)

const Comments = ({ message }) => (
  <p><strong>{ message }</strong></p>
)
