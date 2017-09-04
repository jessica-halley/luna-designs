
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prints').del()
    .then(function () {
      // Inserts seed entries
      return knex('prints').insert([
        {id: 1, name: 'Bee Print', image: 'images/prints/Bee.jpg', description: 'print'},
        {id: 2, name: 'Cactus Print', image: 'images/prints/Cactus.jpg', description: 'print'},
        {id: 3, name: 'Crayfish Print', image: 'images/prints/Crayfish.jpg', description: 'print'},
        {id: 4, name: 'Friends Are Like Stars Print', image: 'images/prints/Friends.jpg', description: 'print'},
        {id: 5, name: 'Heart Print', image: 'images/prints/Heart.jpg', description: 'print'},
        {id: 6, name: 'Move Mountains Print', image: 'images/prints/MoveMountains.jpg', description: 'print'}
      ])
    });
};
