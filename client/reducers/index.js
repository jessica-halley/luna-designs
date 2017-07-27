import { combineReducers } from 'redux'
import prints from './prints'
import cart from './cart'
import page from './page'

// import otherReducer from './other-reducer'

export default combineReducers({
  prints,
  cart,
  page
})
