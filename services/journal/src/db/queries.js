const knex = require('./connection');

function getSavedJournals(userId) {
  return knex('journal').select().where('user_id', userId);
}

function addJournal(obj) {
  return knex('journal').insert(obj);
}

module.exports = {
  getSavedJournals,
  addJournal,
};
