const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.json({ message: 'Get goal' })
})

const setGoal = asyncHandler(async (req, res) => {
    res.json({ message: 'Set goal'})
})

const updateGoal = asyncHandler(async (req, res) => {
    res.json({ message: `Update goal ${req.params.id}`})
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ message: `Delete goal ${req.params.goalId}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} 