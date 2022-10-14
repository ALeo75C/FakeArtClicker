import React, { Component } from 'react'
import PicturesCollection from '../1,5_Collections/PicturesCollection.jsx'
import { unit_names } from '../../data/unitNames.jsx'

export default class GalleryBlock extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cash = this.props.data.money
    let fin = ''
    if (cash > 100) {
      const total_digits = 3
      const base = Math.log10(cash)
      const unit_power = Math.floor(base / 3)
      const cur_unit = unit_names[unit_power]
        ? unit_names[unit_power]
        : unit_names[11]

      const rem = cash / 10 ** (unit_power * 3)

      const dec_digits = Math.min(
        total_digits,
        Math.ceil(Math.log10(rem) + 1e-4)
      )
      const prec_digits = total_digits - dec_digits

      fin =
        new Intl.NumberFormat('en', {
          style: 'decimal',
          maximumFractionDigits: prec_digits
        }).format(rem) +
        cur_unit +
        '$/сек'
    } else {
      fin =
        new Intl.NumberFormat('en', {
          style: 'decimal',
          maximumFractionDigits: 2
        }).format(cash) + '$/сек'
    }

    return (
      <div className="GalleryBlock">
        <div className="header">
          <h1 onClick={() => this.props.changePage(5, this.props.id)}>
            Gallery_0{this.props.id}
          </h1>
          <p>{fin}</p>
        </div>
        <PicturesCollection
          sourse={this.props.area + '/' + this.props.id}
          size={this.props.data.size}
          pictures={this.props.data.pictures}
          changeblock={this.props.changeblock}
        />

        <div
          className="but"
          onClick={() => this.props.changePage(5, this.props.id)}
        >
          открыть
        </div>
      </div>
    )
  }
}

// key={i}
// id={i}
// data={pictures[i]}
// onPress={onPress}
// changeblock={this.props.changeblock}
