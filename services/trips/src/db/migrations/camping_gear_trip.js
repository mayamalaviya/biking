exports.up = (knex) => {
  return knex.schema.createTable('camping_gear_trip', (table) => {
    table.increments();
    table.integer('camping_gear_id').notNullable();
    table.string('trip_id').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('camping_gear_trip');
};
