import React, { Component } from 'react'
import Cash from './Cash.jsx'

export default class Wallet extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Wallet">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://design.hse.ru/"
        >
          <div className="HSE"></div>
        </a>
        <Cash cash={this.props.cash} clicks={this.props.clicks} />
      </div>
    )
  }
}
