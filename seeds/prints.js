
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prints').del()
    .then(function () {
      // Inserts seed entries
      return knex('prints').insert([
        {id: 1, name: 'Bee Print', image: 'images/prints/Bee.png', description: 'print'},
        {id: 2, name: 'Cactus Print', image: 'images/prints/Cactus.png', description: 'print'},
        {id: 3, name: 'Crayfish Print', image: 'images/prints/Crayfish.png', description: 'print'},
        {id: 4, name: 'Friends Are Like Stars Print', image: 'images/prints/Friends.png', description: 'print'},
        {id: 5, name: 'Heart Print', image: 'images/prints/Heart.png', description: 'print'},
        {id: 6, name: 'Move Mountains Print', image: 'images/prints/Mountains.png', description: 'print'}
      ])
    });
};
