exports.up = (knex) => {
  return knex.schema.createTable('destinations', (table) => {
    table.increments();
    table.string('name');
    table.string('addded_by');
    table.integer('trip_id').unsigned();
    table.foreign('trip_id').references('trips.id');
    table.string('summary');
    table.string('detail');

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropForeign('trip_id')
  .dropTable('destinations');
};
