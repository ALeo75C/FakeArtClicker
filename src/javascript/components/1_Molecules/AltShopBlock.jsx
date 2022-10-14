import React, { Component } from 'react'

import { intFormat } from '../../actions/intFormat.jsx'

export default class AltShopBlock extends Component {
  constructor(props) {
    super(props)
  }
  renderStat = () => {
    const stat = this.props.stat
    const fun = this.props.function
    let block
    if (stat) {
      let text =
        this.props.name == 'Ученик' ? (
          <p>&#8226; Сделано {intFormat(stat.st)} мазков</p>
        ) : (
          <p>&#8226; Продано {intFormat(stat.st)} картин</p>
        )
      block = (
        <div>
          <div className="line"></div>
          <div className="altContent">
            {text}
            <p>&#8226; {fun}</p>
          </div>
        </div>
      )
    }
    return block
  }

  render() {
    const inStudio = this.props.stat ? (
      <p>
        <span>{this.props.stat.level}</span> в мастерской
      </p>
    ) : (
      ''
    )
    return (
      <div className="AltShopBlock">
        <div className="title">
          <div className="main">
            <h3>{this.props.name}</h3>
            {inStudio}
          </div>
          <h4>${intFormat(this.props.cost)}</h4>
        </div>
        <div className="line"></div>
        <div className="altContent">
          <p>{this.props.content}</p>
        </div>
        {this.renderStat()}
      </div>
    )
  }
}
