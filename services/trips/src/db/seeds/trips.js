exports.seed = (knex, Promise) => {
  return knex('trips').del()
  .then(() => {
    return Promise.join(
      knex('trips').insert({
        user_id: 1,
        name: 'Cape Cod',
        state: 'MA',
        country: 'USA',
        notes: 'Over 100 miles of bike trails.',
        month: 'July',
        year: '2019',
        days: '4',
      })  // eslint-disable-line
    );
  })
  .catch((err) => { console.log(err); }); // eslint-disable-line
};
