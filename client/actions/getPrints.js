import request from 'superagent'

export const receivePrints = (prints) => {
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
        console.info("Got prints")
        dispatch(receivePrints(res.body))
      })
  }
}
