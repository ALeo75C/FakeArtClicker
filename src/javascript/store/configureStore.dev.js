import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  console.log('We now use dev store')

  const store = createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  console.log('configureStore', store.getState())

  return store
}

export default configureStore
