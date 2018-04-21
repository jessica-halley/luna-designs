import React from 'react'
import {connect} from 'react-redux'
import {modal} from 'react-redux-modal'
import {Link} from 'react-router-dom'
import {getPrints} from '../actions/getPrints'

const renderPrint = (print, key) => (
  <div key={key}>
    <div className="col-md-1"></div>
    <div className="prints-box col-md-5">
      <figure>
        <div className="icontainer">
          <img src={print.image} className="print-image"/>
        </div>
        <figcaption>
          <h2 className="fig-caption">{print.name}</h2>
        </figcaption>
      </figure>
    </div>
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
          <div className="category-list-header"></div>
            {prints.map((print, key) => renderPrint(print, key))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {prints: state.prints}
}

export default connect(mapStateToProps)(Prints)
