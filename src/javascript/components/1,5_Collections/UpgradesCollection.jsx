import React, { Component } from 'react'
import AltShopBlock from '../1_Molecules/AltShopBlock.jsx'

export default class UpgradesCollection extends Component {
  constructor(props) {
    super(props)
  }

  renderUpgrades = () => {
    const upgrades = this.props.upgrade
    const money = this.props.money
    let upgradesItems = []
    upgrades.forEach((upgrade, i) => {
      if (upgrade.isOpen && !upgrade.itPurchased) {
        let onClick = () => {}
        let isActive = 'inactive'
        if (money >= upgrade.cost) {
          isActive = 'active'
          onClick = this.props.onPress
        }
        upgradesItems.push(
          <div
            className={'upgrade ' + isActive}
            onClick={() => onClick(i)}
            key={i}
          >
            <div className={'img id_' + i}></div>
            <AltShopBlock
              name={upgrade.title}
              cost={upgrade.cost}
              content={upgrade.text}
            />
          </div>
        )
      }
    })
    return upgradesItems
  }
  // {upgrade.title}

  render() {
    return <div className={'UpgradesCollection'}>{this.renderUpgrades()}</div>
  }
}
