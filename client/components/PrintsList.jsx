import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCards} from '../actions/getCards'


class ListAllCards extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getCards())
  }

  render () {
    const {listAllCards} = this.props
    return (
      <div className='wallpaper-no-border'>
        <div className='container'>
          <div className='org-header'>
            <h4>Consider recycling or donating your used items at any of these Wellington organisations:</h4>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    listAllCards: state.listAllCards
  }
}

export default connect(mapStateToProps)(ListAllCards)
