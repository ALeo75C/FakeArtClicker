import React, { Component } from 'react'

import Dillers from '../0_Atoms/Dillers.jsx'
import Wallet from '../0_Atoms/Wallet.jsx'

import Logo from '../../../assets/logo.svg'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Header">
        <div className="logo">
          <span dangerouslySetInnerHTML={{ __html: Logo }} />
        </div>
        <Wallet cash={this.props.cash} clicks={this.props.clicks} />
        <Dillers dealers={this.props.dealers} />
      </div>
    )
  }
}
