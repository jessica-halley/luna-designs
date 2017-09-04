
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
