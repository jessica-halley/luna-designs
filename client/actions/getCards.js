import request from 'superagent'

export const listAllCards = (cards) => {
  return {
    type: 'LIST_CARDS',
    cards
  }
}

export function getCards () {
  return (dispatch) => {
    request
      .get('/api/cards')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(listAllCards(res.body))
      })
  }
}
