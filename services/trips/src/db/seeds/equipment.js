exports.seed = (knex, Promise) => {
  return knex('equipment').del()
  .then(() => {
    return Promise.join(
      knex('equipment').insert({
        item: 'tent',
        make: 'Coleman',
        model: 'Highline II',
        year_bought: '2018',
        primary_user: 'all',
        usage_quantity: '2',
        usage_unit: 'nights',
      }),  // eslint-disable-line
      knex('equipment').insert({
        item: 'bike',
        make: 'Dahon',
        model: 'Mariner',
        year_bought: '2013',
        primary_user: 'Maya',
        usage_quantity: '500',
        usage_unit: 'miles',
      })  // eslint-disable-line
    );
  })
  .catch((err) => { console.log(err); }); // eslint-disable-line
};
