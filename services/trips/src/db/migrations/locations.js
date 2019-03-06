exports.up = (knex) => {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.integer('added_by').notNullable();
    table.string('name').notNullable();
    table.string('state').notNullable();
    table.string('country').notNullable();
    table.string('notes').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('trips');
};
