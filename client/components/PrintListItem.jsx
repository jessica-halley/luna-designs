import React from 'react'
import {connect} from 'react-redux'

const PrintListItem = (props) => (
  <div>
    <div className="Print">
      <p className="name">{props.print.name}</p>
      <p className="description">{props.print.brewery}</p>
      <p>
        <span className="country">{props.print.country}</span>
        <span className="abv">{props.print.abv}</span>
        <a onClick={() => addToCart(props.print, props.dispatch)} className="cart-link" href="/#/CartList">Add to cart</a>
      </p>
    </div>
  </div>
)

const addToCart = (Print, dispatch) => {
  dispatch(require('../actions/index').addToCart('cart', Print))
}

export default connect()(PrintListItem)
