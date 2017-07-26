
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, name: 'birthdayCard', image: 'images/cards/birthdayCard.pdf', description: 'Gift card'},
        {id: 2, name: 'cactusCard', image: 'images/cards/cactusCard.pdf', description: 'Gift card'},
        {id: 3, name: 'hbCard', image: 'images/cards/heartCard.pdf', description: 'Gift card'},
        {id: 4, name: 'heartCard', image: 'images/cards/hbCard.pdf', description:'Gift card'}
      ]);
    });
};
