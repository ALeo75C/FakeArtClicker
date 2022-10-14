import React, { Component } from 'react'
import Picture from '../0_Atoms/Picture.jsx'

export default class PicturesCollection extends Component {
  constructor(props) {
    super(props)
  }

  drop = (e) => {
    e.preventDefault()
    const picId = e.dataTransfer.getData('picId')
    const picture = document.getElementById(picId)

    this.props.changeblock(picId, e.target.id)
  }

  dragOver = (e) => {
    e.preventDefault()
  }

  pictureRender = () => {
    const pictures = this.props.pictures
    const onPress = this.props.onPress
    const size = this.props.size
    let pictureItems = []
    for (var i = 0; i < pictures.length; i++) {
      if (pictures[i].status != 11) {
        pictureItems.push(
          <Picture
            key={i}
            id={i}
            sourse={this.props.sourse}
            data={pictures[i]}
            onPress={onPress}
            changeblock={this.props.changeblock}
            opacity={pictures[i].timeToSale}
          />
        )
      }
    }
    if (size) {
      for (var i = 0; i < size - pictures.length; i++) {
        pictureItems.push(<Picture forShadow={this.props.sourse} key={i} />)
      }
    }
    return pictureItems
  }

  render() {
    return (
      <div
        id={this.props.sourse}
        className="PicturesCollection"
        onDrop={this.drop}
        onDragOver={this.dragOver}
      >
        {this.pictureRender()}
      </div>
    )
  }
}
