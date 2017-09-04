import { combineReducers } from 'redux'
import cards from './cards'
import prints from './prints'
import {reducer as modalReducer} from 'react-redux-modal'

// import otherReducer from './other-reducer'

export default combineReducers({
  cards,
  prints,
  modals: modalReducer
})
