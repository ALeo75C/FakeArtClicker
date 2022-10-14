import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { intFormat } from '../../actions/intFormat.jsx'

import AltShopBlock from '../1_Molecules/AltShopBlock.jsx'

class Statistic extends Component {
  constructor(props) {
    super(props)
  }

  renderUpg = () => {
    const upg = this.props.general.upgrade
    let upgItems = []
    upg.forEach((up, i) => {
      const className = up.itPurchased ? 'pic true' : 'pic'
      upgItems.push(
        <div className={className + ' id_' + i}>
          {up.itPurchased ? '' : <h1>?</h1>}
          <AltShopBlock name={up.title} cost={up.cost} content={up.text} />
        </div>
      )
    })
    return upgItems
  }

  render() {
    let props = this.props.general
    return (
      <div className="Statistic">
        <div className="collections">
          <div className="col">
            <h1>Улучшения</h1>
            {this.renderUpg()}
          </div>
          <div className="col"></div>
        </div>
        <div className="stat">
          <div className="line"></div>
          <div>
            <div className="block">
              <p>Всего сделано кликов:</p>
              <span>{intFormat(props.statistics.totalClick)}</span>
            </div>
            <div className="block">
              <p>Всего нарисовано картин:</p>
              <span>{intFormat(props.statistics.totalPainting)}</span>
            </div>
            <div className="block">
              <p>Всего продано картин:</p>
              <span>{intFormat(props.statistics.totalSales)}</span>
            </div>
            <div className="block">
              <p>Всего заработано галереей:</p>
              <span>${intFormat(props.statistics.totalGalleryEarned)}</span>
            </div>
            <div className="block">
              <p>Всего заработано:</p>
              <span>${intFormat(props.statistics.totalMoneys)}</span>
            </div>
            <br />
            <div className="block">
              <p>Мастерство:</p>
              <span>{intFormat(props.study.skill)}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

export default connect(mapStateToProps)(Statistic)
