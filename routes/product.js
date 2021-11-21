const router = require('express-promise-router')();

const {getProduct } = require('../controllers/product');

router.route('/')
    .get(getProduct)
    

module.exports = router;