import { combineReducers } from 'redux'
import listCards from './listCards'
import cart from './cart'
import page from './page'

// import otherReducer from './other-reducer'

export default combineReducers({
  listCards,
  cart,
  page
})
