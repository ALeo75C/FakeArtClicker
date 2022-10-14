import React, { Component } from 'react'

import { intFormat } from '../../actions/intFormat.jsx'

export default class PictureCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cost = this.props.cost ? <h3>${intFormat(this.props.cost)}</h3> : ''
    const copy = this.props.copy ? <span>[копия]</span> : ''
    return (
      <div className="PictureCard">
        {copy}
        <h3>{this.props.title}</h3>
        <div className="info">
          <p>{this.props.author}</p>
          <p>{this.props.year}г.</p>
        </div>
        {cost}
      </div>
    )
  }
}
