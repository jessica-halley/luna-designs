import request from 'superagent'

export const receiveCards = (cards) => {
  return {
    type: 'RECEIVE_CARDS',
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
        dispatch(receiveCards(res.body))
      })
  }
}
