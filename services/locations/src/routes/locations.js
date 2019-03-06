const express = require('express');

const queries = require('../db/queries.js');
const routeHelpers = require('./_helpers');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

/*
get locations by user
 */
/* eslint-disable no-param-reassign */
router.get('/user', routeHelpers.ensureAuthenticated, (req, res, next) => {
  return queries.getSavedLocations(parseInt(req.user, 10))
  .then((locations) => {
    res.json({
      status: 'success',
      data: locations,
    });
  })
  .catch((err) => { return next(err); });
});
/* eslint-enable no-param-reassign */

/*
add new location
 */
router.post('/', routeHelpers.ensureAuthenticated, (req, res, next) => {
  req.body.user_id = req.user;
  return queries.addLocation(req.body)
  .then(() => {
    res.json({
      status: 'success',
      data: 'Location Added!',
    });
  })
  .catch((err) => { return next(err); });
});

module.exports = router;
