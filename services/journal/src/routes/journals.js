const express = require('express');

const queries = require('../db/queries.js');
const routeHelpers = require('./_helpers');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

/*
get journals by user
 */
/* eslint-disable no-param-reassign */
router.get('/user', routeHelpers.ensureAuthenticated, (req, res, next) => {
  return queries.getSavedJournals(parseInt(req.user, 10))
  .then((journals) => {
    res.json({
      status: 'success',
      data: journals,
    });
  })
  .catch((err) => { return next(err); });
});
/* eslint-enable no-param-reassign */

/*
add new journal
 */
router.post('/', routeHelpers.ensureAuthenticated, (req, res, next) => {
  req.body.user_id = req.user;
  return queries.addJournal(req.body)
  .then(() => {
    res.json({
      status: 'success',
      data: 'Journal Added!',
    });
  })
  .catch((err) => { return next(err); });
});

module.exports = router;
