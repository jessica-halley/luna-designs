exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('prints', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('description')
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('prints')

};
