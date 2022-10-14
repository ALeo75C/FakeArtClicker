import './game.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './javascript/store/configureStore.js'
import { baseState } from './javascript/data/initialState.jsx'
import Game from './javascript/containers/Game.jsx'

// prettier-ignore
// const clientId = document.cookie
//   .match(/_ga=(.+?);/)[1]
//   .split('.')
//   .slice(-2)
//   .join('.')
const clientId = document.cookie.split(';')[1].split('.').slice(-2).join('.')

const initialState = Object.assign({}, baseState, { clientId: clientId })
const store = configureStore({ general: initialState })

// console.log('STORE', store.getState())

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
})
