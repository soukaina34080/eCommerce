const router = require('express-promise-router')();

const {getProduct,getProductById } = require('../controllers/product');

router.route('/')
    .get(getProduct)
    
router.route('/:idProduit')
    .get(getProductById)
module.exports = router;