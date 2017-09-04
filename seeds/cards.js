
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, name: 'Cupcake Card', image: 'images/cards/birthdayCard.pdf', description: 'Gift card'},
        {id: 2, name: 'Cactus Card', image: 'images/cards/cactusCard.pdf', description: 'Gift card'},
        {id: 3, name: 'Heart Card', image: 'images/cards/heartCard.pdf', description: 'Gift card'},
        {id: 4, name: 'Happy Birthday Card', image: 'images/cards/hbCard.pdf', description:'Gift card'}
      ]);
    });
};
