exports.up = (knex) => {
  return knex.schema.createTable('bikes', (table) => {
    table.increments();
    table.integer('make').notNullable();
    table.string('model').notNullable();
    table.string('rider').notNullable();
    table.string('year_bought').notNullable();
    table.string('miles_ridden').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('bikes');
};
