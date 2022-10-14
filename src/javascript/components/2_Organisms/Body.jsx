import React, { Component } from 'react'

import Studio from './Studio.jsx'
import Shop from './Shop.jsx'
import Statistic from './Statistic.jsx'
import Study from './Study.jsx'
import Settings from './Settings.jsx'
import Gallery from './Gallery.jsx'
import Info from './Info.jsx'

import Menu from '../1_Molecules/Menu.jsx'

import Back from '../../../assets/back.svg'

import Character from '../../../assets/Character_1.svg'

export default class Content extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const pageId = this.props.page
    const phase = this.props.phase
    let page = ''
    let partClassName = 'Part '

    if (pageId == 0) {
      page = <Studio />
    } else if (pageId == 1) {
      page = <Study />
    } else if (pageId == 2) {
      page = <Shop />
    } else if (pageId == 3) {
      page = <Statistic />
    } else if (pageId == 4) {
      page = <Settings />
    } else if (pageId == 5) {
      page = <Gallery data={this.props.gallery} />
    } else if (pageId == 6) {
      page = <Info />
      partClassName += 'noscrolling'
    } else {
      page = <div>LOL</div>
    }

    // <div className="border"></div>
    const character = this.props.phrase.character
    const story = this.props.story ? 'story' : ''
    const characterId =
      this.props.phrase.character == 'Клякса'
        ? 2
        : this.props.phrase.character == 'Краска'
        ? 1
        : 0
    return (
      <div className="Content">
        <div className="GameHeader">
          <div
            className={'back p' + pageId}
            onClick={() => this.props.changePage(0)}
          >
            <span dangerouslySetInnerHTML={{ __html: Back }} />
          </div>

          <div className="cover" onClick={() => this.props.changePrathe(true)}>
            <div className="h_l"></div>
            <div className="h_r"></div>
          </div>
          <div className={'CharacterBlock c_' + characterId}>
            <span
              className="Character"
              dangerouslySetInnerHTML={{ __html: Character }}
            />

            <div className={'Message ' + story}>
              <h2>{character}</h2>
              <p>{this.props.phrase.text}</p>
            </div>
          </div>
          <Menu pageid={pageId} onClick={this.props.changePage} />
        </div>
        <div className="Page">
          <div className="wrapper n4">
            <div className="Cover_rigth_1"></div>
          </div>
          <div className="wrapper n5">
            <div className="Cover_rigth_2"></div>
          </div>
          <div className={partClassName}>{page}</div>
        </div>
      </div>
    )
  }
}
