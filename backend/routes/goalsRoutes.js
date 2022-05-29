const express = require('express')
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const protect = require('../middlewares/authMiddleware')
const router = express.Router()

router.get('/', protect, getGoals)

router.post('/', protect, setGoal)

router.put('/:id', protect, updateGoal)

router.delete('/:goalId', protect, deleteGoal)

module.exports = router