import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components'
import createStore from './store'

/* configure store */
const initialState = 0
const store = createStore(initialState)

/**
 * subscribe to store changes.
 * returns a function to unsubscribe if needed
 */
const unsubscribe = store.subscribe(() => {
  console.log('State:', store.getState())
})

render((
    <Provider store={store}>
      <App unsubscribe={unsubscribe} />
    </Provider>
  ), document.getElementById('root')
)
