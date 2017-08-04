
const getCards = (db) => {
  return db('cards').select('*')
}


module.exports = {
  getCards
}
