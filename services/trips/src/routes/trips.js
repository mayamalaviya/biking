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
router.get('/trips/user', routeHelpers.ensureAuthenticated, (req, res, next) => {
  return queries.getSavedTrips(parseInt(req.user, 10))
  .then((trips) => {
    res.json({
      status: 'success',
      data: trips,
    });
  })
  .catch((err) => { return next(err); });
});
/* eslint-enable no-param-reassign */

router.get('/equipment', (req, res, next) => {
  return queries.getEquipments()
  .then((equipments) => {
    res.json({
      status: 'success',
      data: equipments,
    });
  })
  .catch((err) => { return next(err); });
});

router.get('/trips', (req, res, next) => {
  return queries.getTrips()
  .then((trips) => {
    res.json({
      status: 'success',
      data: trips,
    });
  })
  .catch((err) => { return next(err); });
});

router.get('/destinations', (req, res, next) => {
  return queries.getDestinations()
  .then((destinations) => {
    res.json({
      status: 'success',
      data: destinations,
    });
  })
  .catch((err) => { return next(err); });
});
/*
add new trip
 */
router.post('/trips', routeHelpers.ensureAuthenticated, (req, res, next) => {
  req.body.user_id = req.user;
  return queries.addTrip(req.body)
  .then(() => {
    res.json({
      status: 'success',
      data: 'Trip Added!',
    });
  })
  .catch((err) => { return next(err); });
});

module.exports = router;
