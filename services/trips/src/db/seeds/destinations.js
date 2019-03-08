exports.seed = (knex, Promise) => {
  return knex('destinations').del()
  .then(() => {
    return Promise.join(
      knex('destinations').insert({
        added_by: 'Maya',
        trip_id: '1',
        summary: 'Campground',
        detail: 'Near bike trails',
      })  // eslint-disable-line
    );
  })
  .catch((err) => { console.log(err); }); // eslint-disable-line
};
