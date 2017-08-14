import request from 'superagent'

export const recievePrints = (prints) => {
  return {
    type: 'RECEIVE_PRINTS',
    prints
  }
}

export function getPrints () {
  return (dispatch) => {
    request
      .get('/api/prints')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(recievePrints(res.body))
      })
  }
}
