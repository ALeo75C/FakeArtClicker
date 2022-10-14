import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  sell,
  studioUpdate,
  hiring,
  buyUpgrade,
  changeblock,
  chandePage,
  autoSalesSwitch
} from '../../actions/index.js'

import Block from '../1_Molecules/Block.jsx'
import StudioShop from './StudioShop.jsx'
import GalleriesCollection from '../1,5_Collections/GalleriesCollection.jsx'

class Studio extends Component {
  constructor(props) {
    super(props)
  }

  // <p>{props.study.skill}</p>
  // <p>|||||||||||||||||||</p>
  render() {
    const props = this.props.general
    const actions = this.props.actions
    return (
      <div className="Studio">
        <div className="StudioContent">
          <Block
            title="Образцы"
            area="r"
            pictures={props.paintings[1]}
            changeblock={actions.changeblock}
            onPress={() => console.log('click')}
          />
          <Block
            title="Продукция"
            area="s"
            pictures={props.paintings[0]}
            isOpen={props.units[1].level != 0}
            autoSell={props.autoSale}
            autoSalesSwitch={actions.autoSalesSwitch}
            changeblock={actions.changeblock}
            onPress={actions.sell}
          />
          <GalleriesCollection
            title="Галереи"
            area="g"
            isActive={props.galleriesIsActive}
            changeblock={actions.changeblock}
            content={props.paintings[2]}
            changePage={actions.chandePage}
          />
        </div>
        <StudioShop
          units={props.units}
          stat={props.statistics}
          money={props.moneyGained}
          hiringUnit={actions.hiring}
          update={actions.studioUpdate}
          updates={props.studioUpdate}
          upgrade={props.upgrade}
          upgrades={actions.buyUpgrade}
        />
        <div></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      sell,
      studioUpdate,
      hiring,
      buyUpgrade,
      changeblock,
      chandePage,
      autoSalesSwitch
    },
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Studio)
