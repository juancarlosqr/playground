import React, {
  Component,
  PropTypes
} from 'react'

export default class Likes extends Component {
  componentWillUpdate (nextProps) {
    console.log('componentsWillUpdate - nextProps', nextProps)
  }

  shouldComponentUpdate (nextProps) {
    return (this.props.count !== nextProps.count || this.props.message !== nextProps.message)
  }

  render () {
    const { message } = this.props
    console.log('rendered!', message)
    return (
      <div>
        <Title message={ message } />
        <LikesNumber { ...this.props } />
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
const Title = ({ message }) => (
  <p><strong>{ message }</strong></p>
)

const LikesNumber = ({ count }) => (
  <p>{ `${ count } likes` }</p>
)
