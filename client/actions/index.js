
export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const navigate = (path) => {
  return {
    type: 'NAVIGATE_TO',
    page: path
  }
}

export const addToCart = (path, prints) => {
  return {
    type: 'ADD_TO_CART',
    page: path,
    prints
  }
}
