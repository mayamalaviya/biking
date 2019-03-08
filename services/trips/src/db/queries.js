const knex = require('./connection');

function getSavedTrips(userId) {
  return knex('trips').select().where('user_id', userId);
}

function addTrip(obj) {
  return knex('trips').insert(obj);
}

function addDestination(obj) {
  return knex('destinations').insert(obj);
}

function addEquipment(obj) {
  return knex('equipment').insert(obj);
}

function getEquipments() {
  return knex('equipment').select('*');
}

function getDestinations() {
  return knex('equipment').select('*');
}

module.exports = {
  getSavedTrips,
  getEquipments,
  addEquipment,
  addTrip,
  addDestination,
  getDestinations,
};
