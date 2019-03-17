import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducer'

const create = (initialState) => {
  console.log('Initial state:', initialState)
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  return store
}

export default create
