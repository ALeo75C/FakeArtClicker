import React, { Component } from 'react'
import Student from '../0_Atoms/Student.jsx'

export default class Students extends Component {
  constructor(props) {
    super(props)
  }

  genAnimation = (element, idx, initial_rotation, amplitude) => {
    let steps = 10

    let style = document.documentElement.appendChild(
      document.createElement('style')
    )
    let rule = '@keyframes wiggle' + idx + ' {'

    for (let i = 0; i <= steps; ++i) {
      let sign = i % 2 == 0 ? 1 : -1
      rule +=
        (i / steps) * 100 +
        '% { transform: rotate(' +
        (initial_rotation + (amplitude * i * sign) / steps) +
        'deg) } '
    }
    rule += '}'

    style.innerHTML = rule
  }

  renderStudents = () => {
    // console.log()
    // width: 3vw;
    // height: 11vh;
    let cursorItems = []
    const container = document.getElementsByClassName('canvas')[0]
    if (container) {
      const body = document.body.getBoundingClientRect()
      const max_per_circle = 25
      const cursor_width = body.width * 0.03
      const cursor_height = body.height * 0.11
      const r_increase = 30
      const n = this.props.students
      const angle_per_cursor = 360.0 / max_per_circle
      const container_width = container.getBoundingClientRect().width
      const container_height = container.getBoundingClientRect().height
      const aspect = container_height / container_width

      const basic_r = Math.min(container_width, container_height) / 2.0
      let cur_r = basic_r

      for (let i = 0; i != n; ++i) {
        let cur_circle = Math.floor(i / max_per_circle)
        let cur_r = basic_r + r_increase * cur_circle
        let i_per_circle = i % max_per_circle
        let cur_angle =
          angle_per_cursor * i_per_circle +
          270 +
          angle_per_cursor * 0.5 * (cur_circle % 2)

        let studentPosition = {}
        studentPosition.left =
          cur_r * Math.cos((cur_angle * Math.PI) / 180.0) + basic_r
        studentPosition.top =
          (cur_r * Math.sin((cur_angle * Math.PI) / 180.0) + basic_r) * aspect
        studentPosition.width = cursor_width
        studentPosition.height = cursor_height
        studentPosition.transform = 'rotate(' + (cur_angle + 90) + 'deg)'
        studentPosition.margin =
          '-' + cursor_height / 2.0 + 'px -' + cursor_width / 2 + 'px'

        // this.genAnimation(div, i, cur_angle + 90, 10)
        // studentPosition.style.animation = 'wiggle' + i + ' 1s ease infinite'
        // studentPosition.style.animationDelay = Math.random() + 's'

        cursorItems.push(<Student number={i} key={i} style={studentPosition} />)
      }
    }
    return cursorItems
  }

  render() {
    return <div className="Students">{this.renderStudents()}</div>
  }
}
