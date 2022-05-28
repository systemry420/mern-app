const express = require('express')
const { registerUser, login, getUser } = require('../controllers/userController')
const router = express.Router()

router.post('/', registerUser)
router.post('/login', login)
router.get('/me', getUser)

module.exports = router