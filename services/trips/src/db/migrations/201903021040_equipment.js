exports.up = (knex) => {
  return knex.schema.createTable('equipment', (table) => {
    table.increments();
    table.string('item').notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.integer('year_bought');
    table.string('primary_user');
    table.integer('usage_quantity').unsigned();
    table.string('usage_unit');

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('equipment');
};
