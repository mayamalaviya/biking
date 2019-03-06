exports.up = (knex) => {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.string('trip').notNullable();
    table.string('summary').notNullable();
    table.string('entry').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('trips');
};
