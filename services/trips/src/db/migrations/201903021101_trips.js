exports.up = (knex) => {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.string('location').notNullable();
    table.string('month').notNullable();
    table.string('year').notNullable();
    table.string('equipment_id').notNullable();
    table.string('title').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('trips');
};
