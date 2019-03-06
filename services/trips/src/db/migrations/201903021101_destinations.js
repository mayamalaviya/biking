exports.up = (knex) => {
  return knex.schema.createTable('destinations', (table) => {
    table.increments();
    table.integer('added_by').notNullable();
    table.string('location_id').notNullable();
    table.string('summary').notNullable();
    table.string('detail').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('destinations');
};
