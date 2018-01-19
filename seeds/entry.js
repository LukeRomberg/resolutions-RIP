
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entry').del()
    .then(function () {
      // Inserts seed entries
      return knex('entry').insert([
        {title: 'save money', votes: 0, cat_id: 1},
        {title: 'spend less', votes: 0, cat_id: 1},
        {title: 'healthier', votes: 0, cat_id: 2},
        {title: 'eat veggies', votes: 0, cat_id: 2},
        {title: '30 min exercise blowout', votes: 0, cat_id: 3},
        {title: 'talk to people', votes: 0, cat_id: 4},
        {title: 'get a job', votes: 0, cat_id: 5},
      ]);
    });
};
