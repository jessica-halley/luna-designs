
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, name: 'Cupcake Card', image: 'images/cards/cupcakeCard.png', description: 'Gift card'},
        {id: 2, name: 'Cactus Card', image: 'images/cards/cactusCard.png', description: 'Gift card'},
        {id: 3, name: 'Heart Card', image: 'images/cards/heartCard.png', description: 'Gift card'},
        {id: 4, name: 'Happy Birthday Card', image: 'images/cards/hbCard.png', description:'Gift card'},
        {id: 5, name: 'Birthday Card', image: 'images/cards/birthdayCard.png', description:'Gift card'},
        {id: 6, name: 'Thank You Card', image: 'images/cards/thankyouCard.png', description:'Gift card'},
      ])
    });
};
