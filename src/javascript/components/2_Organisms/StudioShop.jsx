import React, { Component } from 'react'

import StudioShopBlock from '../1_Molecules/StudioShopBlock.jsx'
import UnitBlock from '../1_Molecules/UnitBlock.jsx'
import UpgradesCollection from '../1,5_Collections/UpgradesCollection.jsx'

export default class StudioShop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const units = this.props.units
    const hiring = this.props.hiringUnit

    const update = this.props.update
    const updates = this.props.updates

    const upgrade = this.props.upgrade
    const upgrades = this.props.upgrades

    return (
      <div className="StudioShop">
        <div className="UnitShop">
          <UnitBlock
            id={0}
            title="ученик"
            unit={units[0]}
            money={this.props.money}
            stat={this.props.stat.totalAutoClick}
            function="Делает 1мазок/сек"
            onPress={hiring}
          />
          <UnitBlock
            id={1}
            title="диллер"
            unit={units[1]}
            stat={this.props.stat.totalAutoSales}
            money={this.props.money}
            function={
              'Автоматически продает картину за ' + units[1].speed + 'сек'
            }
            onPress={hiring}
          />
        </div>
        <UpgradesCollection
          money={this.props.money}
          upgrade={upgrade}
          onPress={upgrades}
        />
      </div>
    )
  }
}
// <div className="UpdatesShop">
//   <StudioShopBlock
//     id={0}
//     title="Материалы"
//     level={updates[0].level}
//     cost={updates[0].cost}
//     onPress={update}
//   />
//   <StudioShopBlock
//     id={1}
//     title="Помещение"
//     level={updates[1].level}
//     cost={updates[1].cost}
//     onPress={update}
//   />
//   <StudioShopBlock
//     id={2}
//     title="Освещение"
//     level={updates[2].level}
//     cost={updates[2].cost}
//     onPress={update}
//   />
// </div>
