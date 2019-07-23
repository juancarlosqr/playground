import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Option = ({ mobile, question }) => (
  <Header
    as='h1'
    content={question}
    inverted
    style={{
      fontSize: mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: '0.3em',
      marginTop: mobile ? '1.5em' : '3em',
    }}
  />
)

Option.defaultProps = {
  mobile: false,
}

Option.propTypes = {
  mobile: PropTypes.bool,
  question: PropTypes.string.isRequired,
}

export default Option
