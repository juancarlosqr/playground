import React from 'react'
import { connect } from 'react-redux'
import { Button, Container, Segment, Icon } from 'semantic-ui-react'
import Home from './Home'
import Option from './Option'
import { checkAnswer, startGame, endGame } from '../redux/actions'

/**
 * next features:
 * 
 * results at the end of the game
 * endless
 * random questions
 * random position of answers
 * by levels with all features
 */
class App extends React.Component {

  renderOptions() {
    const { success, error, answers, options, current, currentIndex, checkAnswer, startGame, endGame } = this.props
    const endText = success ? 'Go back' : 'Exit'
    const optionsList = options.map(option => (
      <Button
        key={option.value}
        color={option.color}
        size='huge'
        onClick={() => {checkAnswer(option.value)}}>
        {option.value}
      </Button>
    ))

    return (
      <Container>
        <Option question={`${current.case} ${current.person}`} />
        <p className='message'>{`${currentIndex + 1} / ${answers.length}`}</p>
        <div className='options'>{optionsList}</div>
        {success && <p className='message'>🎉🎉🎉 Congratulations! You know the german articles! 🎉🎉🎉</p>}
        {error && <p className='message'>try again...</p>}
        <p className='actions'>
          <Button color='red' size='small' onClick={() => {endGame()}}>
            <Icon name='left arrow' />
            {endText}
          </Button>
          <Button primary size='small' disabled={!currentIndex} onClick={() => {startGame()}}>
            <Icon name='redo' />
            Restart
          </Button>
        </p>
      </Container>
    )
  }

  renderHome() {
    const { startGame } = this.props
    return (
      <Home startGame={startGame} />
    )
  }

  render() {
    const { gaming } = this.props
    return (
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        {gaming ? this.renderOptions() : this.renderHome()}
      </Segment>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {
  checkAnswer,
  startGame,
  endGame,  
})(App)
