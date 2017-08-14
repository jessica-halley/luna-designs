
function prints (state = [], action = {}) {
  switch (action.type) {
    case 'RECEIVE_PRINTS':
      return action.cards
    default:
      return state
  }
}

export default prints
