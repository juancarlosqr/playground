import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header, { moviesRoute, directorsRoute } from './components/Header'
import Movies from './components/Movies'
import Directors from './components/Directors'

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path={moviesRoute} component={Movies}></Route>
        <Route path={directorsRoute} component={Directors}></Route>
      </Switch>
    </Fragment>
  )
}

export default App
