
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {title: 'money'},
        {title: 'food'},
        {title: 'exercise'},
        {title: 'relationships'},
        {title: 'careers'},
        {title: 'misc'},
      ]);
    });
};
