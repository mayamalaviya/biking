exports.up = (knex) => {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.integer('name').notNullable();
    table.string('state').notNullable();
    table.string('country').notNullable();
    table.string('GPS');
    table.string('notes');

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('trips');
};
