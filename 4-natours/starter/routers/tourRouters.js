const express = require('express');
const tourcontrollers = require('../routeControllers/tourControllers')
const router = express.Router();

// router.param('id', tourcontrollers.checkID);

router
    .route('/')
    .get(tourcontrollers.AllTours)
    .post(tourcontrollers.AddTours)
router
    .route('/:id')
    .get(tourcontrollers.TourId)
    .patch(tourcontrollers.UpdateTour)
    .delete(tourcontrollers.DeleteTours)

module.exports = router;