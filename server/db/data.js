
const getCards = (db) => {
  return db('cards').select('*')
}

const getPrints = (db) => {
  return db('prints').select('*')
}


module.exports = {
  getCards,
  getPrints
}
