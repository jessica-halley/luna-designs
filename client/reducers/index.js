import { combineReducers } from 'redux'
import cards from './cards'
import prints from './prints'
import cart from './cart'
import page from './page'

// import otherReducer from './other-reducer'

export default combineReducers({
  cards,
  prints,
  cart,
  page
})
