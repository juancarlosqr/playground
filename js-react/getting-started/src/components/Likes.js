import React from 'react'
import PropTypes from 'prop-types'

/* stateless component */
const Title = ({ message }) => (
  <p><strong>{ message }</strong></p>
)

class Likes extends React.Component {
  componentWillUpdate(nextProps) {
    console.log('nextProps', nextProps)
  }

  shouldComponentUpdate(nextProps) {
    const { count, message } = this.props
    return (count !== nextProps.count || message !== nextProps.message)
  }

  render() {
    const { count, message } = this.props
    console.log(message, 'is rendered!')
    return (
      <div>
        <Title message={message} />
        <p>{`${count} likes`}</p>
      </div>
    )
  }
}

Likes.propTypes = {
  count: PropTypes.number.isRequired,
  message: PropTypes.string,
}

Likes.defaultProps = {
  count: 0,
  message: 'Built with React JS',
}

export default Likes
