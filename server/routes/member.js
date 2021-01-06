const express = require('express')
const router = express.Router()

// List Controller
const MemberController = require('../controllers/MemberController')

// Member Controller
router.get('/', MemberController.index)

module.exports = router