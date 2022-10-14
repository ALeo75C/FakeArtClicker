import React, { Component } from 'react'
import PicturesCollection from '../1,5_Collections/PicturesCollection.jsx'

export default class Block extends Component {
  constructor(props) {
    super(props)
  }
  // drop = (e) => {
  //   e.preventDefault()
  //   const picId = e.dataTransfer.getData('picId')
  //   const picture = document.getElementById(picId)
  //   console.log(e)
  //
  //   console.log(e.target)
  //
  //   picture.classList.remove('draggable')
  //
  //   this.props.changeblock(picId)
  // }
  //
  // dragOver = (e) => {
  //   e.preventDefault()
  // }

  render() {
    let autoSell = ''
    if (this.props.area == 's' && this.props.isOpen) {
      autoSell = (
        <div
          className={'but ' + this.props.autoSell}
          onClick={this.props.autoSalesSwitch}
        >
          Авто
        </div>
      )
    }
    return (
      <div id={this.props.area} className="Block">
        <h1>{this.props.title}</h1>
        {autoSell}
        <PicturesCollection
          pictures={this.props.pictures}
          changeblock={this.props.changeblock}
          onPress={this.props.onPress}
          sourse={this.props.area}
        />
      </div>
    )
  }
}
