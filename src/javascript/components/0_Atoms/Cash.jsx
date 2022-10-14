import React, { Component } from 'react'
import { intFormat } from '../../actions/intFormat.jsx'

export default class Cash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cash = intFormat(this.props.cash)

    return (
      <div className="Cash">
        <h2>${cash}</h2>
        <p>{intFormat(this.props.clicks)} мазков для картины</p>
      </div>
    )
  }
}
