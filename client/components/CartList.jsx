import React from 'react'
import {connect} from 'react-redux'
import CartListItem from './CartListItem'

const CartList = (props) => (
  <div>
    <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
    <table id ='CartList'>
      <thead>
        <tr>
          <th>Beer</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {listBeers(props.beers)}
      </tbody>
    </table>

    <p className="actions">
      <a onClick={() => continueShopping(props.dispatch)}>Continue shopping</a>
      <button>Update</button>
      <a onClick={() => checkOut(props.dispatch)} className="checkout-link" href="/#/Checkout">Checkout</a>
    </p>
  </div>
)

const continueShopping = (dispatch) => {
  dispatch(require('../actions/index').navigate('beerList'))
}

const checkOut = (dispatch) => {
  dispatch(require('../actions/index').navigate('App'))
}

function listBeers(beersArray) {
  return beersArray.map((beer) => {
    return <CartListItem key={beer.id} {...beer} />
  })
}

function mapState2Props(state) {
  return {
    beers: state.cart
  }
}

export default connect(mapState2Props)(CartList)
