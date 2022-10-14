import React, { Component } from 'react'
import Band from '../../../assets/band.svg'
import Close from '../../../assets/close.svg'

export default class Banner extends Component {
  constructor(props) {
    super(props)
  }

  close = () => {
    const banner = document.getElementsByClassName('Banner')[0]
    banner.classList.add('hidden')
  }

  render() {
    return (
      <div className="Banner" onClick={this.close}>
        <div className="content">
          <div className="characters">
            <span dangerouslySetInnerHTML={{ __html: Band }} />
          </div>
          <p>
            — Что исключили из художественной академии и хочешь показать им?
          </p>
          <p>— Присоединяйся к нам!</p>
          <p>
            — Мы хотим заполонить весь арт-рынок подделками, надеемся на твою
            помощь
          </p>
          <div className="back"></div>
          <div className="cover"></div>
          <div className="close">
            <span dangerouslySetInnerHTML={{ __html: Close }} />
          </div>
        </div>
      </div>
    )
  }
}

// <div className="bor"></div>
