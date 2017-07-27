export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return (state.indexOf(action.beer) >-1 ? state : [...state, action.beer] )
    default:
      return state
  }
}
