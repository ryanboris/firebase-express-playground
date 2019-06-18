exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('properties').insert([{ id: 1 }])
    })
}
