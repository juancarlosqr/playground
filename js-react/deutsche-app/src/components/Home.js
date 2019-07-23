import React from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'

const Home = ({ mobile, startGame }) => (
  <Container text>
    <Header
      as='h1'
      content='Deutsche Artikel'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginTop: mobile ? '1.5em' : '3em',
        marginBottom: 0,
      }}
    />
    <Header
      as='h2'
      content='Do you know the german articles? 🤔'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em',
        marginBottom: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge' onClick={startGame}>
      Let's play
      <Icon name='right arrow' />
    </Button>
  </Container>
)

export default Home
