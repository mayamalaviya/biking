exports.up = (knex) => {
  return knex.schema.createTable('camping_gear', (table) => {
    table.increments();
    table.string('item').notNullable();
    table.integer('make').notNullable();
    table.string('model').notNullable();
    table.string('year_bought').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('camping_gear');
};
