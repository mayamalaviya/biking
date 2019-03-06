exports.up = (knex) => {
  return knex.schema.createTable('bike_trip', (table) => {
    table.increments();
    table.integer('bike_id').notNullable();
    table.string('trip_id').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('bike_trip');
};
