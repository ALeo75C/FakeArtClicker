import React, { Component } from 'react'
import GalleryBlock from '../1_Molecules/GalleryBlock.jsx'

export default class GalleriesCollection extends Component {
  constructor(props) {
    super(props)
  }

  renderGalleries = () => {
    const galleries = this.props.content
    const changeblock = this.props.changeblock
    const changePage = this.props.changePage
    let galleriesItems = []
    galleries.forEach((gallery, i) => {
      galleriesItems.push(
        <GalleryBlock
          key={i}
          id={i}
          area={this.props.area}
          changeblock={changeblock}
          changePage={changePage}
          data={gallery}
        />
      )
    })
    return galleriesItems
  }

  render() {
    return (
      <div className={'GalleriesCollection ' + this.props.isActive}>
        <h1>{this.props.title}</h1>
        {this.renderGalleries()}
      </div>
    )
  }
}
