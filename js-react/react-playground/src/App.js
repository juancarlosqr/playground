import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Context from './Context'
import RenderProps from './RenderProps'
import Cognito from './Aws/Cognito'
import './App.css'

const routes = {
  index: '/',
  cognito: '/aws-amplify-cognito/',
  context: '/context/',
  renderProps: '/render-props/',
}

const Index = () => (
  <div>
    <p>
      <Link to={routes.cognito} className="App-link">aws-amplify-cognito</Link>
    </p>
    <p>
      <Link to={routes.context} className="App-link">context</Link>
    </p>
    <p>
      <Link to={routes.renderProps} className="App-link">render-props</Link>
    </p>
  </div>
)

const App = () => (
  <Router>
    <div className="App">
      <header className='App-header'>
        <h1>playground</h1>
      </header>
      <Route exact path={routes.index} component={Index} />
      <Route path={routes.context} component={Context} />
      <Route path={routes.cognito} component={Cognito} />
      <Route path={routes.renderProps} component={RenderProps} />
    </div>
  </Router>
)

export default App
