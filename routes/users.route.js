const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');


//User Signup route
router.post('/signup', user_controller.user_signup)
// User Login Route
router.post('/login', user_controller.user_login)

router.get('/dashboard',user_controller.redirectLogin ,user_controller.dashboard)

module.exports = router;
