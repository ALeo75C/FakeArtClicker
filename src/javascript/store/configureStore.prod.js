import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  console.log('We now use prod store')
  const store = createStore(rootReducer, preloadedState)

  return store
}

export default configureStore
