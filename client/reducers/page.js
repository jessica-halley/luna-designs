export default (state = 'beerList', action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return action.page
    case 'NAVIGATE_TO':
      return action.page
    default:
      return state
  }
}
