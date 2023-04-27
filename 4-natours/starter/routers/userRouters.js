
const express = require('express');
const usercontrollers = require('../routeControllers/userControllers');
const authcontrollers = require('../routeControllers/authControllers');
const router = express.Router();

// router.post('/signup',authcontrollers.signup)

router
    .route('/')
    .get(usercontrollers.allUsers)
    .post(usercontrollers.addUsers)
router
    .route('/:id')
    .get(usercontrollers.userId)
    .patch(usercontrollers.updateUsers)
    .delete(usercontrollers.deleteUsers)

module.exports = router;