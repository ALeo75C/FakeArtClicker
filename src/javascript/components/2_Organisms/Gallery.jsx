import React, { Component } from 'react'

import PictureCard from '../1_Molecules/PictureCard.jsx'
import Picture from '../0_Atoms/Picture.jsx'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
  }

  renderPictures = () => {
    const pictures = this.props.data.pictures
    let pictureItems = []

    pictures.forEach((picture, i) => {
      const quo =
        picture.quality == 1
          ? '0'
          : picture.quality > 0.7
          ? '1'
          : picture.quality > 0.3
          ? '2'
          : '3'
      pictureItems.push(
        <div className="picture">
          <div
            className={
              'img s_' +
              (picture.referense.id - 1) +
              ' ' +
              picture.referense.position +
              ' quo_' +
              quo
            }
          >
            <div className="ligth"></div>
            <div className={'border'}></div>
          </div>
          <PictureCard
            title={picture.referense.title}
            author={picture.referense.author}
            year={picture.referense.year}
            copy={picture.quality != 1}
          />
        </div>
      )
    })
    for (var i = 0; i < this.props.data.size - pictures.length; i++) {
      const position = ['horizontal', 'square', 'vertical']
      pictureItems.push(
        <div className="picture">
          <div className={'img shaddow ' + position[i]}></div>
        </div>
      )
    }
    return pictureItems
  }

  // {this.renderPictures()}
  render() {
    return (
      <div className="Gallery">
        {this.renderPictures()}
        <div className="null"></div>
      </div>
    )
  }
}

// key={i}
// id={i}
// data={pictures[i]}
// onPress={onPress}
// changeblock={this.props.changeblock}
