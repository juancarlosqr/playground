import React, { PropTypes } from 'react'

function Header (props) {
  return (
    <div>
      <h3>{ props.title }</h3>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
