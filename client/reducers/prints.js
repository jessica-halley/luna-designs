
function prints (state = [], action = {}) {
  switch (action.type) {
    case 'RECEIVE_PRINTS':
      return action.prints
    default:
      return state
  }
}

export default prints
