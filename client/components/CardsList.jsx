import React from 'react'
import {connect} from 'react-redux'
import {modal} from 'react-redux-modal'
import {Link} from 'react-router-dom'
import {getCards} from '../actions/getCards'
import myModalComponent from './modal'

function addModal(printKey, printName) {
  modal.add(myModalComponent, {
    title: printName.toString(),
    size: 'medium', // large, medium or small,
    closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
    hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
    hideCloseButton: false // (optional) if you don't wanna show the top right close button
    //.. all what you put in here you will get access in the modal props ;)
  });
}




const renderCard = (card, key) => (
  <div key={key}>
    <div className="col-md-1"></div>
    <div className="prints-box col col-md-5">
      <figure>
        <div className="icontainer">
        <img src={card.image} className="card-image"/>
        </div>
        <figcaption>
          <h2>{card.name}</h2>
          <button onClick={addModal.bind(this, card.id, card.name)}>Add to Cart</button>
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
