const router = require('express-promise-router')();

const { example, example2,exampleWithDB } = require('../controllers/users');

router.route('/')
    .get(exampleWithDB)
    

module.exports = router;