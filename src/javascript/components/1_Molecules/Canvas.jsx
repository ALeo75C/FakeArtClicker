import React, { Component } from 'react'
import Students from '../0_Atoms/Students.jsx'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const sourse = { sourse: 0 }
    const quo = this.props.pictureQ
      ? this.props.pictureQ == 1
        ? ' quo_0'
        : this.props.pictureQ > 0.7
        ? ' quo_1'
        : this.props.pictureQ > 0.3
        ? ' quo_2'
        : ' quo_3'
      : ''

    const pic_class =
      this.props.pictureId || this.props.pictureId == 0
        ? this.props.pictureType
          ? 'pc_0_' + this.props.pictureType
          : 'pc_' + this.props.pictureId
        : ''
    const className = 'canvas ' + pic_class + quo
    return (
      <div className="CAN">
        <Students students={this.props.students} />
        <div className={className} onClick={() => this.props.press(0)}></div>
      </div>
    )
  }
}
