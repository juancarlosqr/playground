import React from 'react'
import Header from './Header'
import Likes from './Likes'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likesCount: 0,
      message: 'Talk is cheap'
    }
    this.onLike = this._onLike.bind(this)
    this.onDislike = this._onDislike.bind(this)
  }

  _onLike () {
    this.setState({likesCount: this.state.likesCount + 1})
  }

  _onDislike () {
    this.setState({likesCount: this.state.likesCount - 1})
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <Header title='Customer Analytics' />
        <button onClick={ this.onLike }>LIKE</button>
        <button onClick={ this.onDislike }>DON'T LIKE</button>
        <Likes count={ this.state.likesCount } message={ this.state.message } />
        <Likes count={ 1 } />
        <Header title='Sales Analytics' />
      </div>
    )
  }
}
