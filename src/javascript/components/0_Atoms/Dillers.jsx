import React, { Component } from 'react'

export default class Dillers extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Dillers">
        <div className="dil-pic"></div>
        <p>x{this.props.dealers.level}</p>
      </div>
    )
  }
}
