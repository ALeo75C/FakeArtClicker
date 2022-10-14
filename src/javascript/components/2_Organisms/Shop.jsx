import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getOriginal } from '../../actions/index.js'

import PictureCard from '../1_Molecules/PictureCard.jsx'

class Shop extends Component {
  constructor(props) {
    super(props)
  }

  picturesRender = (pictures) => {
    let picItems = []
    pictures.forEach((picture, i) => {
      if (picture.isSoldOut) {
        picItems.push(
          <div className={'picture' + ' soldOut'}>
            <div className={'img s_' + i + ' ' + picture.position}>
              <div className={'border'}></div>
              <div className={'back'}>Продано</div>
            </div>
            <PictureCard
              title={picture.title}
              author={picture.author}
              year={picture.year}
              key={i}
            />
          </div>
        )
      } else {
        const inactive =
          this.props.general.moneyGained < picture.cost ? 'inactive' : ''

        picItems.push(
          <div
            className={'picture ' + inactive}
            onClick={() => this.props.actions.getOriginal(i)}
          >
            <div className={'img s_' + i + ' ' + picture.position}>
              <div className="ligth"></div>
              <div className={'border'}></div>
            </div>
            <PictureCard
              title={picture.title}
              author={picture.author}
              year={picture.year}
              cost={picture.cost * 100}
              key={i}
            />
          </div>
        )
      }
    })
    return picItems
  }

  render() {
    const pictures = this.props.general.originals.slice(1)
    return (
      <div className="Shop">
        <div className="picturesCollection">
          {this.picturesRender(pictures)}
          <div className="null"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getOriginal }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
