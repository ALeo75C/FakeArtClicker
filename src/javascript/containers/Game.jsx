import React from 'react'
import { connect } from 'react-redux'
// import * as GameActions from '../actions'
import { bindActionCreators } from 'redux'
import Clicker from '../components/2_Organisms/Clicker.jsx'
import Body from '../components/2_Organisms/Body.jsx'
import Banner from '../components/1_Molecules/Banner.jsx'

import {
  paint,
  sell,
  chandePage,
  autoSell,
  galleryWorking,
  chandePhase,
  getPhrase,
  save,
  load
} from '../actions/index.js'

// выводить размер галереи

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const actions = this.props.actions
    setInterval(() => {
      const props = this.props.general
      if (props.loading) {
        actions.load()
      } else {
        const students = props.units[0]
        const dealers = props.units[1]
        if (students.level > 0) {
          actions.paint(1)
        }
        if (dealers.level > 0 && props.autoSale) {
          actions.autoSell()
        }
        this.pistureSell()
        if (props.galleriesIsActive) {
          actions.galleryWorking()
        }
        actions.chandePhase()
        actions.getPhrase()
        actions.save()
      }
    }, 1000)
  }

  pistureSell = () => {
    this.props.general.paintings[0].forEach((paint, i) => {
      if (paint.status == 10) {
        paint.timeToSale -= 1
        if (paint.autoSell) {
          paint.timeFraction =
            paint.timeToSale / this.props.general.units[1].speed
        } else {
          paint.timeFraction = paint.timeToSale / this.props.general.speedOfSale
        }
        if (paint.timeToSale <= 0) {
          this.props.actions.sell(i)
        }
      }
    })
  }

  render() {
    const props = this.props.general
    const actions = this.props.actions
    const banner = props.moneyGained == 0 ? <Banner /> : null
    if (!this.props.general.loading) {
      return (
        <div className="Game">
          {banner}
          <Clicker />
          <Body
            page={props.pageid}
            phase={props.phase}
            phrase={props.phrase}
            story={props.story}
            gallery={props.paintings[2][props.openGalleryId]}
            changePage={actions.chandePage}
            changePrathe={actions.getPhrase}
          />
        </div>
      )
    } else {
      return (
        <div className="Game">
          <p>LOADING</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      paint,
      sell,
      chandePage,
      autoSell,
      galleryWorking,
      chandePhase,
      getPhrase,
      save,
      load
    },
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
