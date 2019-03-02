const knex = require('./connection');

function getSavedTrips(userId) {
  return knex('trips').select().where('user_id', userId);
}

function addTrip(obj) {
  return knex('trips').insert(obj);
}

module.exports = {
  getSavedTrips,
  addTrip,
};
