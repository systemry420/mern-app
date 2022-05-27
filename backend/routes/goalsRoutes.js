const express = require('express')
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const router = express.Router()

router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id', updateGoal)

router.delete('/:goalId', deleteGoal)

module.exports = router