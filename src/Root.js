import React from 'react'
import Main from './views/main'
import configureStore from './store/configStore.js'
import { Provider } from 'react-redux'

// fake store
const defaultState = {
  notification: {
    show: false,
    n: {}
  }
}

const store = configureStore(defaultState)

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default Root
