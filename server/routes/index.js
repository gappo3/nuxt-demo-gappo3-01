const express = require('express')
const router = express.Router()

// List Controller
const IndexController = require('../controllers/IndexController')

// Index Controller
router.get('/', IndexController.index)

module.exports = router