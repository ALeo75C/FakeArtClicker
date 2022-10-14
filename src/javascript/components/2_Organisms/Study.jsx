import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { study } from '../../actions/index.js'

import PictureCard from '../1_Molecules/PictureCard.jsx'

class Study extends Component {
  constructor(props) {
    super(props)
  }

  getAuthors = (pictures) => {
    let authors = new Set()

    pictures.forEach((pic, i) => {
      const aut = pic.author
      authors.add(aut)
    })
    return authors
  }

  renderPictures = (pictures, author) => {
    let autPictures = new Set()
    let pictureItems = []
    pictures.forEach((pic, i) => {
      if (pic.author == author) {
        autPictures.add(pic)
      }
    })

    autPictures.forEach((pic, i) => {
      const cost = (pic.cost * 1.5 ** this.props.general.study.studyCount) / 200
      const inactive = cost <= this.props.general.moneyGained ? '' : 'inactive'
      pictureItems.push(
        <div
          className={'picture ' + inactive}
          onClick={() => this.props.actions.study(pic)}
        >
          <div className={'img s_' + (pic.id - 1) + ' ' + pic.position}>
            <div className="ligth"></div>
            <div className={'border'}></div>
          </div>
          <PictureCard
            title={pic.title}
            author={pic.author}
            year={pic.year}
            cost={cost}
            copy={true}
          />
        </div>
      )
    })
    return <div className="picturesCollection">{pictureItems}</div>
  }

  renderAuthors = (pictures) => {
    let authorItems = []
    this.getAuthors(pictures).forEach((author, i) => {
      authorItems.push(
        <div className="authorBlock">
          <h1>{author}</h1>
          {this.renderPictures(pictures, author)}
        </div>
      )
    })

    return authorItems
  }

  render() {
    const pictures = this.props.general.originals.slice(1)

    // <p>Стоимость обучения {this.props.general.study.studyCoast}</p>
    // <p>Мастерство {this.props.general.study.skill}</p>
    return (
      <div className="Study">
        {this.renderAuthors(pictures)}
        <div className="null"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ study }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Study)
