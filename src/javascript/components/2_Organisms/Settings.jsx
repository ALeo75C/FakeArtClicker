import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { save, reset } from '../../actions/index.js'

class Settings extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let actions = this.props.actions
    return (
      <div className="Settings">
        <div className="setBlock">
          <p>Сохранить игру</p>
          <div className="but" onClick={() => actions.save(true)}>
            <p>Сохранить</p>
          </div>
        </div>
        <div className="setBlock">
          <p>Сбросить текущее сохранение</p>
          <div className="but" onClick={actions.reset}>
            <p>Сбросить</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  general: state.general
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ save, reset }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
