
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prints').del()
    .then(function () {
      // Inserts seed entries
      return knex('prints').insert([
        {id: 1, name: 'Bee Print', image: 'images/prints/Bee.jpg', description:},
        {id: 2, name: 'Cactus Print', image: 'images/prints/Cactus.jpg', description:},
        {id: 3, name: 'Crayfish Print', image: 'images/prints/Crayfish.jpg', description:},
        {id: 4, name: 'Friends Are Like Stars Print', image: 'images/prints/Friends.jpg', description:},
        {id: 3, name: 'Heart Print', image: 'images/prints/Heart.jpg', description:},
        {id: 3, name: 'Move Mountains Print', image: 'images/prints/MoveMoutains.jpg', description:}
      ])
    });
};
