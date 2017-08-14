import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {getPrints} from '../actions/getPrints'

const renderPrints = (print, key) => (
  <div className="prints-box" key={key}>
    <p>tst</p>
      <figure>
        <img src={'${print.image}'}/>
        <figcaption><h3>{print.name}</h3>
          <p>{print.description}</p>
        </figcaption>
      </figure>
  </div>
)

class Prints extends React.Component {
  componentDidMount () {
    this.props.dispatch(getPrints())
  }

  render () {
    const {prints} = this.props
    return (
      <div className='wallpaper-no-border'>
        <div className='container category-grid-container'>
          <div className="category-list-header">
            <p>Happy shopping!</p>
          </div>
          <div className='categories-container'>
            {prints.map((print, key) => renderPrint(print, key))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {prints: state.prints}
}

export default connect(mapStateToProps)(Prints)
