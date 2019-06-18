exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', tbl => {
    tbl.increments()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('properties')
}
