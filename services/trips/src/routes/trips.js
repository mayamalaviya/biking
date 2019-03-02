const express = require('express');

const queries = require('../db/queries.js');
const routeHelpers = require('./_helpers');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

/*
get trips by user
 */
/* eslint-disable no-param-reassign */
router.get('/user', routeHelpers.ensureAuthenticated, (req, res, next) => {
  return queries.getSavedtrips(parseInt(req.user, 10))
  .then((trips) => {
    res.json({
      status: 'success',
      data: trips,
    });
  })
  .catch((err) => { return next(err); });
});
/* eslint-enable no-param-reassign */

/*
add new trip
 */
router.post('/', routeHelpers.ensureAuthenticated, (req, res, next) => {
  req.body.user_id = req.user;
  return queries.addtrip(req.body)
  .then(() => {
    res.json({
      status: 'success',
      data: 'Trip Added!',
    });
  })
  .catch((err) => { return next(err); });
});

module.exports = router;
