
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNoFileExists('cards', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.image('image')
    table.string('description')
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards')

};
