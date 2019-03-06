exports.seed = (knex, Promise) => {
  return knex('journals').del()
  .then(() => {
    return Promise.join(
      knex('journals').insert({
        user_id: 1,
        trip: '',
        summary: '',
        entry: '',
      })  // eslint-disable-line
    );
  })
  .catch((err) => { console.log(err); }); // eslint-disable-line
};
