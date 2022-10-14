import React, { Component } from 'react'

export default class AltPictureBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    let status = ''
    if (data.quality == 1) {
      status = 'оригинал'
    } else if (data.referense.id == 0) {
      status = 'каракуля'
    } else {
      status = 'копия'
    }
    return (
      <div className="AltPictureBlock">
        <div className="wrapper">
          <div className="title">
            <span>[{status}]</span>
            <h4>
              качество{' '}
              {new Intl.NumberFormat('en', {
                style: 'decimal',
                maximumFractionDigits: 3
              }).format(data.quality)}
            </h4>
          </div>
          <h3>{data.referense.title}</h3>
          <div className="line"></div>
          <div className="altContent">
            <p>{data.referense.style}</p>
            <p>{data.referense.author}</p>
            <p>{data.referense.year}</p>
          </div>
        </div>
      </div>
    )
  }
}
