import React, { Component } from 'react'
import Picture from '../0_Atoms/Picture.jsx'

export default class StudioShopBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    return (
      <div className="StudioShopBlock" onClick={() => props.onPress(props.id)}>
        <div className="im"></div>
        <div className="content">
          <div className="title">
            <p>{props.title} </p>
            <p>
              {' '}
              ур <span>{props.level}</span>
            </p>
          </div>
          <h3>Улучшить</h3>
          <p>${props.cost}</p>
        </div>
      </div>
    )
  }
}
