import React, { Component } from 'react'
import AltShopBlock from './AltShopBlock.jsx'

import { intFormat } from '../../actions/intFormat.jsx'

export default class UnitBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    const itIsOpen = this.props.unit.isActive
    const className = 'UnitBlock ' + itIsOpen
    let onClick = () => {}
    if (itIsOpen) {
      let isActive = 'inactive'
      if (props.money >= props.unit.cost) {
        isActive = props.unit.size
          ? props.unit.size > props.unit.level
            ? 'active'
            : isActive
          : 'active'
        onClick = () => props.onPress(props.id)
      }
      const span =
        props.id == 0 ? (
          <p>
            <span>{props.unit.level}</span>/{props.unit.size} в мастерской
          </p>
        ) : (
          <p>
            <span>{props.unit.level}</span> в мастерской
          </p>
        )
      return (
        <div className={className + ' ' + isActive} onClick={onClick}>
          <div className="im"></div>
          <div className="content">
            {span}
            <h3>Нанять {props.title}а</h3>
            <p>${intFormat(props.unit.cost)}</p>
          </div>

          <AltShopBlock
            name={props.title.charAt(0).toUpperCase() + props.title.slice(1)}
            cost={props.unit.cost}
            content={props.unit.text}
            function={props.function}
            stat={{ level: props.unit.level, st: this.props.stat }}
          />
        </div>
      )
    } else {
      return (
        <div className={className} onClick={() => props.onPress(props.id)}>
          <div className="im"></div>
          <div className="content">
            <p>
              <span>???</span>
            </p>
          </div>
        </div>
      )
    }
  }
}
