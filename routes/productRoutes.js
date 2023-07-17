const express = require('express')
const { getAllProducts, getAllProductTesting } = require('../controllers/products.js')
const router = express.Router()



router.route('/').get(getAllProducts)
router.route("/testing").get(getAllProductTesting)

module.exports = router