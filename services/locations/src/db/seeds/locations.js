exports.seed = (knex, Promise) => {
  return knex('locations').del()
  .then(() => {
    return Promise.join(
      knex('locations').insert({
        name: 'Cape Cod',
        state: 'MA',
        country: 'USA',
        GPS: null,
        notes: null,
      })  // eslint-disable-line
    );
  })
  .catch((err) => { console.log(err); }); // eslint-disable-line
};
