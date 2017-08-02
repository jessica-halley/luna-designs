function listCards (state = [], action = {}) {
  switch (action.type) {
    case 'LIST_CARDS':
      return action.cards

    case 'INIT':
      return state

    default:
      return state
  }
}

export default listCards
