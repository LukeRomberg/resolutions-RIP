exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('entry', (table) => {
    table.increments();
    table.string('title');
    table.integer('votes');
    table.integer('cat_id').references('category.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('entry')
]);
};
