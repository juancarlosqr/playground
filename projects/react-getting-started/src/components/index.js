import React from 'react'
import Likes from './Likes'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likesCount: 0,
      message: 'Talk is cheap'
    }
    this.onLike = this._onLike.bind(this)
  }

  _onLike () {
    this.setState({likesCount: this.state.likesCount + 1})
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <h3>Customer Analytics</h3>
        <button onClick={ this.onLike }>I like this!</button>
        <Likes count={ this.state.likesCount } message={ this.state.message } />
        <Likes count={ 1 } />
      </div>
    )
  }
}
