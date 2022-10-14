import React, { Component } from 'react'

export default class Student extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="Student" style={this.props.style}></div>
  }
}
