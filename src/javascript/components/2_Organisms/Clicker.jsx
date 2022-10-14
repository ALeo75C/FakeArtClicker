import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { paint, sell } from '../../actions/index.js'

import Header from '../1_Molecules/Header.jsx'
import Canvas from '../1_Molecules/Canvas.jsx'

class Clicker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const pictures = this.props.general.paintings[0]
    let picture_id = null
    let picture_q = null
    let picture_type = null
    for (var i = 0; i < pictures.length; i++) {
      if (pictures[i].status == 11) {
        picture_id = pictures[i].referense.id
        picture_q = pictures[i].quality
        picture_type = pictures[i].referense.type
      }
    }

    return (
      <div className="Clicker">
        <Header
          cash={this.props.general.moneyGained}
          clicks={this.props.general.clicksToPainting}
          dealers={this.props.general.units[1]}
        />
        <Canvas
          students={this.props.general.units[0].level}
          pictureId={picture_id}
          pictureType={picture_type}
          pictureQ={picture_q}
          press={this.props.actions.paint}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ paint, sell }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Clicker)
