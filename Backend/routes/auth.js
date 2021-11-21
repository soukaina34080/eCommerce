const router = require('express-promise-router')();

const { signUp } = require('../controllers/auth');

router.route('/register')
    .post(signUp)
    

module.exports = router;