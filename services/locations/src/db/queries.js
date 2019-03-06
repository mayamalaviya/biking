const knex = require('./connection');

function getSavedLocations(userId) {
  return knex('locations').select().where('user_id', userId);
}

function addLocation(obj) {
  return knex('locations').insert(obj);
}

module.exports = {
  getSavedLocations,
  addLocation,
};
