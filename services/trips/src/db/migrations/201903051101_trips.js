exports.up = (knex) => {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.string('name');
    table.string('state').notNullable();
    table.string('country').notNullable().default('USA');
    table.text('notes');
    table.string('month').notNullable();
    table.string('year').notNullable();
    table.string('days').notNullable();

    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('trips');
};
