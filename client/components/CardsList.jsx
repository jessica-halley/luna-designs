import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import {getCards} from '../actions/getCards'

const renderCard = (card, key) => (
  <div className="cards-box" key={key}>
      <figure>
        <img src={card.image} className="card-image"/>
        <figcaption><h3>{card.name}</h3>
          <p>{card.description}</p>
        </figcaption>
      </figure>
  </div>
)

class Cards extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    const {cards} = this.props
    console.log('I was triggered during render')
    return (
      <div className='wallpaper-no-border'>
        <div className='container category-grid-container'>
          <div className="category-list-header">
            <p>Happy shopping!</p>
          </div>
          <div className='categories-container'>
            {cards.map((card, key) => renderCard(card, key))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cards: state.cards}
}

export default connect(mapStateToProps)(Cards)
