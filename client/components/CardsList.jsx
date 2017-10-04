import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCards} from '../actions/getCards'

const renderCard = (card, key) => (
  <div key={key}>
    <div className="col-md-1"></div>
    <div className="prints-box col col-md-5">
      <figure>
        <div className="icontainer">
        <img src={card.image} className="print-image"/>
        </div>
        <figcaption>
          <h2 className="fig-caption">{card.name}</h2>
        </figcaption>
      </figure>
  </div>
</div>
)

class Cards extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCards())
  }

  render () {
    const {cards} = this.props
    return (
      <div className='wallpaper-no-border'>
          <div className="category-list-header"></div>
            {cards.map((card, key) => renderCard(card, key))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cards: state.cards}
}

export default connect(mapStateToProps)(Cards)
