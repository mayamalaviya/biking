exports.seed = (knex, Promise) => {
    return knex('trips').del()
    .then(() => {
      return Promise.join(
        knex('trips').insert({
          user_id: 1,
          title: 'Jurassic Park',
        })  // eslint-disable-line
      );
    })
    .catch((err) => { console.log(err); }); // eslint-disable-line
  };