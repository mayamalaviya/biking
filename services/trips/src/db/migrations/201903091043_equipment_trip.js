exports.up = (knex) => {
  return knex.schema.createTable('equipment_trip', (table) => {
    table.increments();
    table.integer('equipment_id').notNullable().unsigned();
    table.foreign('equipment_id').references('equipment.id');

    table.integer('trip_id').notNullable().unsigned();
    table.foreign('trip_id').references('trips.id');

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema
    .dropForeign('equipment_id')
    .dropForeign('trip_id')
    .dropTable('equipment_trip');
};
