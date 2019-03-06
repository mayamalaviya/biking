const knex = require('./connection');

function getSavedTrips(userId) {
  return knex('trips').select().where('user_id', userId);
}

function addTrip(obj) {
  return knex('trips').insert(obj);
}

function addLocation(obj) {
  return knex('locations').insert(obj);
}

function addDestination(obj) {
  return knex('destinations').insert(obj);
}

function addBike(obj) {
  return knex('bike').insert(obj);
}

function addCampingGear(obj) {
  return knex('camping_gear').insert(obj);
}

module.exports = {
  getSavedTrips,
  addTrip,
  addLocation,
  addDestination,
  addBike,
  addCampingGear,
};
