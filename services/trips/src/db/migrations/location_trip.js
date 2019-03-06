exports.up = (knex) => {
  return knex.schema.createTable('location_trip', (table) => {
    table.increments();
    table.integer('location_id').notNullable();
    table.string('trip_id').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('location_trip');
};
